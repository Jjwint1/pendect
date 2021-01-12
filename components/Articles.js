import { ScrollView } from 'react-native';
import ArticleCard from './ArticleCard';
import React from 'react';

export default function Articles(props) {

    return (
        <ScrollView>
            {
                props.articles.map( article => {
                    return <ArticleCard article={article} key={article.id}/>
                })
            }
        </ScrollView>
    )
};