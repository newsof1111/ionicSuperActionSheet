
<h1>Introduction</h1>
	Thanks to all of you who have downloaded this plugin! Please consider leaving a rating and review, it would be really helpful to get your feedbacks. Thanks.
ionicSuperActionSheet is a gorgeous component allowing you to have amazing designs for your app and details page.
 The ionicSuperActionSheet  disappears when the user scrolls down the page, after a certain limit  the ionicSuperActionSheet  cover all page.	
<h1>Who to use?</h1>
	Installation
	
1.....Copy the css/ionicSuperActionSheet.css into  {{your path}} folder
2.....Update your index.html to link the {{your path}}/ionicSuperActionSheet.css file
3.....Copy the js/ionicSuperActionSheet.js into  {{your path}} folder
4.....Update your index.html to link the {{your path}}/ionicSuperActionSheet.js file
5.....Update the app.js file and add ionic-SuperActionSheet to the list of modules,
				i.e. 
					
angular.module('starter', ['ionic', 'ionic-SuperActionSheet'])
	
</li>
		</ul>
	<h3>Usage</h3>
	<p>
		all you have to do is to add ion-super-action-sheet tag and put your actionSheet's content
	</p>
	<p>
	That's all. Here is the stracture of a view:
	</p>
	<strong>maybe you will use many ionicSuperActionSheets so make sure to identify every one with the attribute 'delegate-handle' example: delegate-handle="sof3" , sof3 is used later to close/open the  ionicSuperActionSheets with the identifier :sof3 
	</strong>
	
<pre><code><xmp>
<ion-view>
.......
<ion-super-action-sheet delegate-handle="sof3" >
</ion-super-action-sheet>
.......
</ion-view></xmp></code></pre>

<p>
<span style="color:red;">you want to open the ionicSuperActionSheets?</span>
 <br>$rootScope.$broadcast('open','sof2');<br>
 <small> where 'sof2' is the identifier of the ion-super-action-sheet. this code will close the ion-super-action-sheet that have 'sof2' as delegate-handle </small><br>
 
<span style="color:red;">you want to close the ionicSuperActionSheets?</span>
 <br>$rootScope.$broadcast('close','sof2');<br>
 <small> where 'sof2' is the identifier of the ion-super-action-sheet. this code will open the ion-super-action-sheet that have 'sof2' as delegate-handle </small><br>
<span style="color:red;">you want to make action when the  ionicSuperActionSheets is closed?</span>
 <br>$scope.$on('closing', function () 
	<br>{
  <br>  alert('you close the ionicSuperActionSheets? are you kidding !!!! :p');
	<br>});
	
</p>
<h1>you want to test ?</h1>
<p>pass this id 4ddac074 in ionic view</p>
<h1>Need Custom Work?</h1>
	<p>If you need help with your Ionic apps, if you need a specific plugin or integration. Let's get in touch. I'll be glad to develop or advise you for your app! Email me at karraysoufien@gmail.com.
	</p>

<div style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 300px;
    border-radius: 5px;
	    margin-left: 20%;">
  <img style="    border-radius: 5px 5px 0 0;" src="https://s3.amazonaws.com/ionic-apps/e52-avatar/e52cb4e5ab823582b40d678c2f62e380" alt="Avatar" style="width:300px">
  <div class="container">
    <h4><b>Karray Soufien</b></h4> 
	<p><small>Computer Science Engineer<small></p>
    <p>Ionic/Angular/Laravel Developer</p> 
	<p> <a href="https://www.xing.com/profile/karray_soufien?sc_o=mxb_p"> Xing Link</a></p>
	<p> <a href="https://www.youtube.com/channel/UCxQqnX8bnYU45GWzSLuEMjQ"> Youtube Channel</a></p>
	<p> <a href="https://www.upwork.com/freelancers/~017ca6f198b727fc42"> Upwork Link</a></p>
	<p> <a href="https://tn.linkedin.com/in/sofien-karray-82b026107"> LinkedIn Link</a></p>
	<p>Email: karraysoufien@gmail.com</p>

<br>
  </div>
</div>
<br><br><br>


