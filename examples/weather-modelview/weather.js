function weather(window, ModelView)
{
    "use strict";

    const LOC_URL = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.metaweather.com/api/location/');
    const SEARCH_URL = 'https://api.allorigins.win/get?url=' + encodeURIComponent('https://www.metaweather.com/api/location/search/?query=');

    // temperature scales
    const T = {
        fahrenheit: {symbol: '\u2109', celsius: t => ((5 / 9) * (t - 32))},
        celsius: {symbol: '\u2103', fahrenheit: t => (t * (9 / 5) + 32)}
    };

    function debounce(f, wait, immediate)
    {
        var timeout;
        return function() {
            var ctx = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) f.apply(ctx, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) f.apply(ctx, args);
        };
    }
    function format_date(strdate)
    {
        const [year, month, day] = strdate.split('-');
        const date = new Date(strdate);
        const dayOfWeek =  date ? ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][date.getDay()] : 'Unknown';
        const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month-1];
        return `${dayOfWeek}, ${monthName} ${day} ${year}`;
    }
    function format_num(n, p)
    {
        return Math.round(+n); //(+n).toFixed(+(p || 2));
    }
    function format_temp(t, scale, convert, withsymbol)
    {
        scale = scale || 'celsius';
        if (convert) t = T['fahrenheit' === scale ? 'celsius' : 'fahrenheit'][scale](t);
        return format_num(t) + (withsymbol ? T[scale].symbol : '');
    }
    function weather_icon(icon, type)
    {
        return "https://www.metaweather.com/static/img/weather/"+icon+"."+(type||"svg").toLowerCase();
    }
    function wind_icon(dir)
    {
        return '<i class="wind-dir '+dir.trim().toLowerCase()+'"></i>';
    }

    class Store
    {
        constructor() {
            this.$data = {};
            this.$timer = null;
            this.loading = {};
        }

        set(key, data) {
            this.$data[key] = data;
            if (Object.prototype.hasOwnProperty.call(this.loading, key)) delete this.loading[key];
            return this;
        }

        get(key) {
            if (Object.prototype.hasOwnProperty.call(this.$data, key)) return this.$data[key];
            if (Object.prototype.hasOwnProperty.call(this.loading, key)) return this;
            return null;
        }

        del(key) {
            if (Object.prototype.hasOwnProperty.call(this.$data, key))
            {
                delete this.$data[key];
                if (Object.prototype.hasOwnProperty.call(this.loading, key)) delete this.loading[key];
            }
            return this;
        }

        clear()  {
            this.$data = {};
            this.loading = {};
            return this;
        }

        autoclear(interval) {
            if (this.$timer)
            {
                clearTimeout(this.$timer);
                this.$timer = null;
            }
            const clear = ( ) => {
                this.clear();
                this.$timer = setTimeout(clear, interval);
            };
            this.$timer = setTimeout(clear, interval);
            return this;
        }
    }

    // singleton
    const store = new Store().autoclear(30 * 60 * 1000); // auto-clear every 30 minutes

    let pagechanged = false;
    const view = new ModelView.View('view')
        .model(new ModelView.Model('model', {
            cities: [
                {name: 'Athens', woeid: 946738},
                {name: 'Beijing', woeid: 2151330},
                {name: 'Berlin', woeid: 638242},
                {name: 'Cairo', woeid: 1521894},
                {name: 'London', woeid: 44418},
                {name: 'Madrid', woeid: 766273},
                {name: 'Moscow', woeid: 2122265},
                {name: 'New Delhi', woeid: 28743736},
                {name: 'New York', woeid: 2459115},
                {name: 'Paris', woeid: 615702},
                {name: 'Sydney', woeid: 1105779}
            ],
            term: '',
            woeid: {}
        })
        .getters({
            'woeid.*': function(k) {
                let woeid = k.split('.')[1] || k;
                if (!woeid || !woeid.length) return {};

                let weatherData = store.get('weather_'+woeid);
                if (weatherData)
                {
                    // null if still loading
                    return store === weatherData ? null : weatherData;
                }
                else
                {
                    store.loading['weather_'+woeid] = true;
                    fetch(LOC_URL+woeid)
                    .then(response => response.json())
                    .then(jsonResponse => {
                        if (jsonResponse.contents) jsonResponse = JSON.parse(jsonResponse.contents);
                        store.set('weather_'+woeid, jsonResponse);
                        this.$data.woeid[woeid] = {city: jsonResponse.title};
                        this.notify('woeid');
                    })
                    .catch(err => {
                        store.set('weather_'+woeid, {});
                        this.notify('woeid');
                    });
                }
            }
            ,'search.*': function(k) {
                let term = k.split('.')[1] || k;
                if (!term || !term.length) return [];

                let searchData = store.get('search_'+term);
                if (searchData)
                {
                    // null if still loading
                    return store === searchData ? null : searchData;
                }
                else
                {
                    store.loading['search_'+term] = true;
                    fetch(SEARCH_URL+term)
                    .then(response => response.json())
                    .then(jsonResponse => {
                        if (jsonResponse.contents) jsonResponse = JSON.parse(jsonResponse.contents);
                        store.set('search_'+term, jsonResponse);
                        this.notify('search');
                    })
                    .catch(err => {
                        store.set('search_'+term, []);
                        this.notify('search');
                    });
                }
            }
        }))
        .template(document.getElementById('AppContent').innerHTML)
        .components({
            'HomePage': ModelView.View.Component('HomePage', document.getElementById('HomePageComponent').innerHTML)
            ,'SearchPage': ModelView.View.Component('SearchPage', document.getElementById('SearchPageComponent').innerHTML)
            ,'WeatherPage': ModelView.View.Component('WeatherPage', document.getElementById('WeatherPageComponent').innerHTML)
            ,'Weather': ModelView.View.Component('Weather', document.getElementById('WeatherComponent').innerHTML, {changed: (o, n) => (o.woeid !== n.woeid) || (o.detailed !== n.detailed) || (o.data !== n.data)})
            ,'WeatherData': ModelView.View.Component('WeatherData', document.getElementById('WeatherDataComponent').innerHTML/*, {changed: (o, n) => (o.woeid !== n.woeid) || (o.detailed !== n.detailed) || (o.data !== n.data)}*/)
            ,'Loader': ModelView.View.Component('Loader', document.getElementById('LoaderComponent').innerHTML)
        })
        .context({
             weather_icon: weather_icon
            ,wind_icon: wind_icon
            ,format_num: format_num
            ,format_temp: format_temp
            ,format_date: format_date
        })
        .option('router.useHash', true)
        .events({
            'window:popstate': function(evt) {
                pagechanged = true;
                this.render();
            }
        })
        .actions({
            search: function(evt, el) {
                let term = (document.getElementById('search').value || '').trim();
                this.model().set('term', term);
                if (term.length) location.hash = '#/search/'+encodeURIComponent(term);
            }
        })
        .autobind(false)
        .livebind(true)
        .bind(['click'], document.getElementById('app'))
        .on('render', () => {
            if (pagechanged)
            {
                pagechanged = false;
                window.scrollTo(0, 0); // scroll to top on new page
            }
        })
    ;

    if (!location.hash) location.hash = '#/';
    else view.render();
}
window.weather = weather;