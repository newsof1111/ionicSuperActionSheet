
# 1:Introduction

Thanks to all of you who have downloaded this plugin! Please consider leaving a rating and review, it would be really helpful to get your feedbacks. Thanks.
ionicSuperActionSheet is a gorgeous component allowing you to have amazing designs for your app and details page.
 The ionicSuperActionSheet  disappears when the user scrolls down the page, after a certain limit  the ionicSuperActionSheet  cover all page.	
 
# 2:Who to use?
## Installation
	
1.....Copy the css/ionicSuperActionSheet.css into  {{your path}} folder <br>
2.....Update your index.html to link the {{your path}}/ionicSuperActionSheet.css file<br>
3.....Copy the js/ionicSuperActionSheet.js into  {{your path}} folder<br>
4.....Update your index.html to link the {{your path}}/ionicSuperActionSheet.js file<br>
5.....Update the app.js file and add ionic-SuperActionSheet to the list of modules,<br>
i.e. <br>
```js
angular.module('starter', ['ionic', 'ionic-SuperActionSheet'])
```
## Usage
	
all you have to do is to add ion-super-action-sheet tag and put your actionSheet's content

That's all. Here is the stracture of a view:
<strong>maybe you will use many ionicSuperActionSheets so make sure to identify every one with the attribute 'delegate-handle' example: delegate-handle="sof3" , sof3 is used later to close/open the  ionicSuperActionSheets with the identifier :sof3 
</strong>

```js
<ion-view>
............  
<ion-super-action-sheet delegate-handle="sof3" >
</ion-super-action-sheet>
.......
</ion-view>
```

##you want to open the ionicSuperActionSheets?
 ```js
$rootScope.$broadcast('open','sof2');
```

 <small> where 'sof2' is the identifier of the ion-super-action-sheet. this code will close the ion-super-action-sheet that have 'sof2' as delegate-handle </small><br>
 
##you want to close the ionicSuperActionSheets?

```js
$rootScope.$broadcast('close','sof2');
```
 <small> where 'sof2' is the identifier of the ion-super-action-sheet. this code will open the ion-super-action-sheet that have 'sof2' as delegate-handle </small><br>
##you want to make action when the  ionicSuperActionSheets is closed?
```js
$scope.$on('closing', function () 
{
   alert('you close the ionicSuperActionSheets? are you kidding !!!! :p');
});
```	

##3:you want to test ?

pass this id 4ddac074 in ionic view
[Youtube Link](https://www.youtube.com/watch?v=112rx7ZUm6o)<br>
[ionic market Link](https://market.ionic.io/plugins/ionicactionsheet2)<br><br><br>
![](www/img/Dec-04-2016 14-39-26.gif)<br>
![](www/img/Dec-04-2016 13-06-59.gif)<br>
##4:Need Custom Work? 

If you need help with your Ionic apps, if you need a specific plugin or integration. Let's get in touch. I'll be glad to develop or advise you for your app! Email me at karraysoufien@gmail.com.
	



