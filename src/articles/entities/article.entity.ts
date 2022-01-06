import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
    @Prop()
    id: string

    @Prop()
    featured: boolean
    
    @Prop()
    title: string
    
    @Prop()
    url: string
    
    @Prop()
    imageUrl: string
    
    @Prop()
    newsSite: string
    
    @Prop()
    summary: string
    
    @Prop()
    publishedAt: string
    
    @Prop()
    launches: [
        {
            id: string
            provider: string
        }
    ]

    @Prop()
    events: [
        {
            id: string
            provider: string
        }
    ]

}

export const ArticleSchema = SchemaFactory.createForClass(Article);