class MarvelServices {

    _appiBas = 'https://gateway.marvel.com:443/v1/public/';
    _apiKey = 'apikey=3595a4aaff1c8071a7f09aad998e74d8';

    getResource = async (url) =>  {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error (`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._appiBas}characters?limit=9&offset=210&${this._apiKey}`);
    }

    getharacter = (id) => {
        return this.getResource(`${this._appiBas}${id}?${this._apiKey}`);
    }

}

export default MarvelServices;