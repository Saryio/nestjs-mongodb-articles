import { Injectable } from '@nestjs/common';
import axios from 'axios'

type ArticlesDataParams = {
    start?: number
    numArticles?: number
    lastArticle?: any
}

type AxiosResponse = {
    data: number
}

@Injectable()
export class ExternalRequestService {
    constructor() {}

    async getArticles({numArticles, lastArticle}: ArticlesDataParams) {

        const numExternalArticles: AxiosResponse = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/count`)
        
        let limit = numArticles - numExternalArticles.data

        if (limit < 0) limit = limit * -1

        const start = numArticles
        const url = encodeURI(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_sort=id&_start=${start}`)
        const rawArticles = (await axios.get(url)).data

        let newArticles: Object[] = []
        
        rawArticles.forEach(article => {
            if (lastArticle < article.id){
                newArticles.push(article)
            }
        });
        return newArticles
    }

    async getAllArticles(){
        const limit = (await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/count`)).data
        const articles = (await axios.get(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}`)).data

        return articles
    }

}
