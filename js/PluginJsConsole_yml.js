function PluginJsConsole_yml(){
  this.level = 0;
  this.yml_str = '';
  this.put = function(data, id){
    this.run_data(data);
    document.getElementById(id).innerHTML = this.yml_str;
  }
  this.log = function(data){
    this.run_data(data);
    console.log(this.yml_str);
  }
  this.run_data = function(data){
    this.level = 0;
    this.yml_str = '';
    this.do_yml(data, this.level, '_name_');
  }
  this.do_yml_array = function(j, level, name){
    /**
     * Array
     */
    if(j.length==0){
      this.yml_str += ' '.repeat(level-1);
      this.yml_str += name+': []'+"\n";
    }
    for(var i =0; i<j.length; i++){
      if(Array.isArray(j[i])){
        /**
         * Array
         */
        this.yml_str += ' '.repeat(level);
        this.yml_str += i+': '+"\n";
        this.do_yml(j[i], (level+1), i);
      }else if(typeof j[i]=='object'){
        /**
         * Object
         */
        var count = 0;
        for(var temp in j[i]){
          count++;
        }
        if(count==0){
          this.yml_str += ' '.repeat(level);
          if(j[i]!==null){
            this.yml_str += i+': {}'+"\n";
          }else{
            this.yml_str += i+': null'+"\n";
          }

        }else{
          this.yml_str += ' '.repeat(level);
          this.yml_str += i+': '+"\n";
          this.do_yml(j[i], (level+1), i);
        }
      }else{
        /**
         * 
         */
        this.yml_str += ' '.repeat(level);
        this.yml_str += i+': '+j[i]+"\n";
      }
    }
  }
  this.do_yml_object = function(j, level, name){
    /**
     * Object
     */
    for(var x in j){
      if(Array.isArray(j[x])){
        /**
         * Array
         */
        if(j[x].length){
          this.yml_str += ' '.repeat(level);
          this.yml_str += x+': '+"\n";
        }
        this.do_yml(j[x], (level+1), x);
      }else if(typeof j[x]=='object'){
        /**
         * Object
         */
        var count = 0;
        for(var temp in j[x]){
          count++;
        }
        if(count==0){
          this.yml_str += ' '.repeat(level);
          if(j[x]!==null){
            this.yml_str += x+': {}'+"\n";
          }else{
            this.yml_str += x+': null'+"\n";
          }
        }else{
          this.yml_str += ' '.repeat(level);
          this.yml_str += x+': '+"\n";
          this.do_yml(j[x], (level+1), x);
        }
      }else{
        /**
         * 
         */
        this.yml_str += ' '.repeat(level);
        this.yml_str += x+': '+j[x]+"\n";
      }
    }
  }
  this.do_yml = function(j, level, name){
    if(Array.isArray(j)){
      this.do_yml_array(j, level, name);
    }else if(typeof j == 'object'){
      this.do_yml_object(j, level, name);
    }
  }
}
var PluginJsConsole_yml = new PluginJsConsole_yml();
