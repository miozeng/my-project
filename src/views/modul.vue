<template>
	
	 <div >

	    <el-row ></el-row>
   <el-row >
        <el-col :span="8"  v-for="(item, index) in boardList">
          <div  class="index-board-item">
            <div  class="index-board-item-inner">
               <h2> <router-link :to="{path: 'modul/1'}">{{ item.name }}</router-link></h2>
               <p>{{ item.description }}</p>
               <el-button type="primary"  v-on:click="update(item.id)">编辑</el-button>
               <el-button type="primary"  v-on:click="excute(item.id)">执行测试用例</el-button>
            </div>
          </div>
        </el-col>
        <el-col :span="8" >
           <div  class="index-board-item">
               <div  class="index-board-item-inner">
                 <div class="addbtn"></div>
                 <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
               </div>
            </div>
        </el-col>
  </el-row>



	<el-dialog title="新增模块" v-model="dialogFormVisible">
	 <!-- <el-form :model="form">
	    <el-form-item label="模块名称" :label-width="formLabelWidth">
	      <el-input v-model="form.name" auto-complete="off"></el-input>
	    </el-form-item>
	    <el-form-item label="模块描述" :label-width="formLabelWidth">
	      <el-input type="textarea" v-model="form.desc"></el-input>
	    </el-form-item>
	  </el-form>
	  <div slot="footer" class="dialog-footer">
	    <el-button @click="dialogFormVisible = false">取 消</el-button>
	    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
	  </div>-->
	</el-dialog>

    </div>
</template>


<script>

  export default {
    data() {
      return {
        dialogTitle: "新增模块",
        dialogFormVisible: false,
        form: {
          name: '',
          id: '',
          desc: ''
        },
        formLabelWidth: '120px',
         boardList: [
        {
          name: 'modulname1',
          description: '项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
          id: '1'
        },
        {
          name: 'modultname2',
          description: '项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
          id: '2'
        },
        {
          name: 'modulname3',
          description: '项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
          id: '3'
        },
        {
          name: 'modulname4',
          description: '项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述项目描述',
          id: '4'
        }
      ]
      };
    },
     methods: {
    update: function (id) {
      alert(id)
    },
     excute: function (id) {
      alert(id)
    }, 
    add: function () {
      alert('add')
    }
  },
  };
</script>
  <style type="text/css">
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }

.index-board-item-inner{
  padding: 5px;
}
  .index-board-item {
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  height: 200px;
  margin: 10px;
  padding:20px;
}

  .index-board-item p{
  height: 120px;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.addbtn {
 height: 80px;

}
</style>  