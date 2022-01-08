import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';


export class UpdateArticleDto extends PartialType(CreateArticleDto) {
    
    @ApiProperty({type: Number, description: 'id'})
    id: number

    @ApiProperty({type: Boolean, description: 'featured'})
    featured: boolean

    @ApiProperty({type: String, description: 'title'})
    title: string

    @ApiProperty({type: String, description: 'url'})
    url: string

    @ApiProperty({type: String, description: 'imageUrl'})
    imageUrl: string

    @ApiProperty({type: String, description: 'newsSite'})
    newsSite: string

    @ApiProperty({type: String, description: 'summary'})
    summary: string

    @ApiProperty({type: String, description: 'publishedAt'})
    publishedAt: string

    @ApiProperty({type: Object, description: 'launches', enum: [ [{id: 'string', provider: 'string'}]] })
    launches: [
        {
            id: string
            provider: string
        }
    ]

    @ApiProperty({type: Object, description: 'events', enum: [ [{id: 'string', provider: 'string'}]] })
    events: [
        {
            id: string
            provider: string
        }
    ]
}
