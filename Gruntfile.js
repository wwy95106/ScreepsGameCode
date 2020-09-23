module.exports = function(grunt) {
  // 加载任务依赖
  grunt.loadNpmTasks('grunt-screeps');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // 定义任务
  grunt.initConfig({
    // screeps 代码上传任务
    screeps: {
      options: {
        email: '934102138@qq.com',
        password: 'wwy1q2w#E$R',
        branch: 'default',
        ptr: false
      },
      dist: {
        src: ['dist/*.{js,wasm}'],
      }
    },
    // 代码变更监听任务
    watch: {
      files: "dist/*.*",
      tasks: [ "screeps" ]
    }
  });
  // 注册默认任务
  grunt.registerTask("default", ["watch"])
}