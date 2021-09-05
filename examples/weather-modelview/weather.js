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

    function normalise(path)
    {
        if (path && path.length)
        {
            path = path.trim();
            if ('#' === path.charAt(0)) path = path.slice(1);
            if ('/' === path.charAt(0)) path = path.slice(1);
            if ('/' === path.slice(-1)) path = path.slice(0, -1);
            path = path.trim();
        }
        return path;
    }
    function route(pattern)
    {
        let route = location.hash;
        route = normalise(route||'').split('/')
        pattern = normalise(pattern||'').split('/');
        if (pattern.length !== route.length) return false;
        for(let i = 0; i < route.length; i++)
        {
            if (':' === pattern[i].charAt(0)) continue;
            if (pattern[i] !== route[i]) return false;
        }
        return true;
    }
    function match(part)
    {
        return decodeURIComponent(normalise(location.hash || '').split('/')[part || 0] || '');
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

    const view = new ModelView.View('view')
        .model(new ModelView.Model('model', {
            cities: [
                /*{name: 'Istanbul', woeid: 2344116},*/
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
                {name: 'Sydney', woeid: 1105779},
                /*{name: 'Helsinki', woeid: 565346},
                {name: 'Dublin', woeid: 560743},
                {name: 'Vancouver', woeid: 9807}*/
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
        .template(document.getElementById('app-content').innerHTML)
        .components({
            'HomePage': new ModelView.View.Component('HomePage', document.getElementById('home-page-component').innerHTML)
            ,'SearchPage': new ModelView.View.Component('SearchPage', document.getElementById('search-page-component').innerHTML)
            ,'WeatherPage': new ModelView.View.Component('WeatherPage', document.getElementById('weather-page-component').innerHTML)
            ,'Weather': new ModelView.View.Component('Weather', document.getElementById('weather-component').innerHTML)
            ,'WeatherData': new ModelView.View.Component('WeatherData', document.getElementById('weather-data-component').innerHTML)
            ,'Loader': new ModelView.View.Component('Loader', document.getElementById('loader-component').innerHTML)
        })
        .context({
            match: match
            ,route: route
            ,weather_icon: weather_icon
            ,wind_icon: wind_icon
            ,format_num: format_num
            ,format_temp: format_temp
            ,format_date: format_date
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
    ;

    window.addEventListener('hashchange', () => {view.render();}, false);

    if (!location.hash) location.hash = '#/';
    else view.render();
}
window.weather = weather;