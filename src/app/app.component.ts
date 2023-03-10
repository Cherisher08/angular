import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles!:Article[];

  constructor(){
    this.articles = [];
  }
  addArticle(title : HTMLInputElement,link : HTMLInputElement ) : boolean{
    if((title.value!='') && (link.value!='')){
      this.articles.push(new Article(title.value,link.value,0));
    }
    title.value='';
    link.value='';
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article)=> b.votes - a.votes);
  }
}
