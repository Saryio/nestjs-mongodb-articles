import { Injectable } from '@nestjs/common';
import axios from 'axios'

type ArticlesDataParams = {
    start?: number
    num?: number
    last?: any
}

type AxiosResponse = {
    data: number
}

@Injectable()
export class ExternalRequestService {
    constructor() {}

    async getArticles({num, last}: ArticlesDataParams) {

        const numExternalArticles: AxiosResponse = await axios.get(`https://api.spaceflightnewsapi.net/v3/articles/count`)
        
        let limit = num - numExternalArticles.data
        if (limit < 0) limit = limit * -1

        const start = num
        const url = encodeURI(`https://api.spaceflightnewsapi.net/v3/articles?_limit=${limit}&_sort=id&_start=${start}`)
        const rawArticles = await await (await axios.get(url)).data

        let articles: Object[] = []
        
        rawArticles.forEach(article => {
            if (last < article.id){
                articles.push(article)
            }
        });
        return articles
    }

}
