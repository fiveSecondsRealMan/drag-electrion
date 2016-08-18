module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "arrowFunctions": true,
            "modules": true,
            "classes": true,
            "defaultParams": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
      /*
        检测规则
        0 - 不检查
        1 - 警告
        2 - 错误
      */
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1,
      "react/react-in-jsx-scope": 1,
      "no-console": 0,                        // 使用console 不检查
      "no-sequences": 0,                      // 结尾使用逗号 不检查
      "no-empty": 1,                          // 空代码块 警告
      "comma-dangle": 2,                      // 数组或对象最后一个元素带有逗号 错误
      "no-unused-vars": 2,                    // 变量定义未使用 错误
      "no-const-assign": 2,                   // 修改了const定义的常量 错误
      "no-duplicate-case": 2,                 // switch case重复 错误
      "no-self-compare": 2,                   // 比较自身 错误
      "comma-spacing": [2, {                  // 逗号前有空格 错误 逗号后没有空格 错误
        "before": false,
        "after": true
      }],
      "constructor-super": 2,                 // 非派生类调用super 错误,
      "new-cap": 2,                           // 作为new调用的function首字母小写 错误
      "new-parens": 2,                        // new function忘记加() 错误
      "no-array-constructor": 2,              // 使用数组构造器 错误
      "no-cond-assign": 2                     // 在条件表达式中使用赋值语句 错误
    }
  }
