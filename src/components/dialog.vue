<template>
   <div  id="myDialog" v-show="show">
		<div  class="covered" v-show="show"></div>
		  <div class="dialog">
		    <div >
		      <div >
		        <button  ><span  v-on:click="close" ></span><span >Close</span></button>
		        <h4  id="myModalLabel">Modal title</h4>
		      </div>
		      <div>
		      <form>
		         <div >
					<label>项目名称: 
					</label>
					<div>
					  <input type="text" >
					</div>
				  </div>

				  <div>
					<label>项目描述:
					</label>
					<div >
					  <textarea ></textarea>
					</div>
				  </div>
				</form>
		      </div>
		      <div >
		        <button type="button" v-on:click="close" >Close</button>
		        <button type="button" >Save</button>
		      </div>
		    </div>
		  </div>
		</div>
    </div>
  </body>
</template>

<script>

export default {
	 name: 'dialog',
	 // props: {
  //           show: true
  //       }
    data () {
      return {
         show:true
      }
    }
   // methods: {
	  //   close: function () {
	  //          this.show=false;
	  //     }
	  //   }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
	.dialog {
    		position:absolute;  
    	   top:100px;  
		   width: 600px;
		   left:400px; 
           margin: 30px auto;
           z-index:8888;  
		}
	 
	    .covered  
	    {  
	        position:fixed;  
	        _position:absolute; 
	        z-index:888;  
	        top:0px;  
	        left:0px;  
	        width:100%;  
	        height:100%;  
	        background-color:Black;  
	        opacity:0.3;  
	    } 

</style>
