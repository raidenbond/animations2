import { Component } from '@angular/core';
import   { trigger,state, style, animate,transition,AnimationEvent } from '@angular/animations';

@Component({
  selector : 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  
  animations:[
    //trigger files 
    trigger('isShown' , [
     
     state('void', style({opacity: 0})),
     state('false', style({height: '0px'})),
     transition('false <=>true', [animate("2s 0.5s ease-in")]),
     transition('* => void', [animate("2s 0.5s ease-in")]),
      
    ]),
    trigger('rotated', [
        state('void', style({transform: 'rotate(-180deg'})),

        transition('void => *',[animate('2.5s ease-in')])]),
    trigger('flyout', [

      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
              style({ transform: 'translateX(-10%'}),
              animate('2s')
      ]),
      transition('* => void', [
        animate('2s', style({ transform: 'translateX(60%)'}))
      ])
    ]),
    
    trigger('banner' ,[
      state('in', style({left: '0%'})),
      transition('void => *',[
        style({left: '100%'}), 
        animate('1s ease-in')
      ]),
      transition('* => void',[
         animate('1s ease-in', style({ left: '-100%'}))
      ])


    ])

  ]

})
  

export class AppComponent  {
  title = 'animations2';
  isDisabled = false;
  isOpen = false;
  x=-1;


    pic = new Array (
      "http://52.229.126.133/cat2.PNG",
      "http://52.229.126.133/horse2.PNG",
    );

    
    toggle() {
      this.isDisabled = !this.isDisabled;
    }

    clicked(){
      if(this.x==0 || this.x == 1){
        window.open("https://images.unsplash.com/photo-1584910131424-412a7aec5fe5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80");
         
      
      }else if ( this.x==2 || this.x == 3){
        console.warn("this is a girl");
        window.open("https://images.unsplash.com/photo-1584971331482-25d1b659b469?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1232&q=80")
      }
             
    }
    onAnimationEvent( event: AnimationEvent){

   
      if (event.phaseName == "done"){

        this.isOpen=true;
        this.toggle();
        if(this.x<7){
          this.x++;
        }else{
          this.x=0;
        }
        console.warn(this.isDisabled);
        console.warn(this.x);
      }

   }
}
