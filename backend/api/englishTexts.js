// 37daf1fab93645a197fa366d18f8e759 - news api key

module.exports = app => {


    const getTextos = async (req, res) => {
        const params = { ...req.body }
        // if(req.params.id) user.id = req.params.id

        const tema = params.tema ?? ''
        const category = params.categoria ?? ''


        key = '37daf1fab93645a197fa366d18f8e759'
        const NewsAPI = require('newsapi');
        const newsapi = new NewsAPI(key);
        // To query /v2/top-headlines
        // All options passed to topHeadlines are optional, but you need to include at least one of them
        newsapi.v2.topHeadlines({
            q: tema,
            category: category,
            language: 'en',
            sortBy: 'relevancy',
        }).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.status(500).send('Ocorreu um erro no servidor')
        })
    }

    return { getTextos }
}