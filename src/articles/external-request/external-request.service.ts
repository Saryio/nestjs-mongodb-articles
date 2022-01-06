import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class ExternalRequestService {
    constructor(){}

    async getSpaceFlightArticles(){
       const articles = await axios.get('https://api.spaceflightnewsapi.net/v3/articles')
       return articles.data
    }

}
