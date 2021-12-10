<template>
  <div class="mx-1 ">  
    <div class="px-5 bg-blue-200">  

       <a href="https://cors-anywhere.herokuapp.com/corsdemo" 
         class="w-full block py-5 px-3 text-center hover:bg-blue-900 hover:text-blue-800"> 
        <!-- <router-link to="/supsetting" class="text-white text-xs"> 
          
        </router-link> -->
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
          </svg>
           輔助設定
      </a>
    {{ t }}
    <hr>
    {{ temptmr }}
      <!-- <download-csv
        class   = "btn bg-red-400 rounded-2xl px-3 m-2 text-white hover:bg-red-600"
        :data   = "temp.data.list" 
        :labels  = " {
                      productCode:'编号',
                      amount:'姓名'
                    }"
        name    = "當日西湖報表.csv">

        匯出資料

      </download-csv> -->

      <!-- <span class="result"></span>
      <hr>  
      顯示 第 {{ temp.data.page }} 頁，訂單數量：{{ temp.data.totalCount }}
      <hr>
      目前 設計 時間:   

      指定為 本筆訂單的消費金額：
      {{ temp.data.list[0].amount  }}

      <hr> 
      指定為 本筆訂單的詳細資料：
      {{ temp.data.list[0].orderNo  }} -->

      <hr>
      指定為 ： 
    </div> 
  </div>
</template>

<script>
// import TutorialDataService from "../services/TutorialDataService";
// import WordDataService from "../services/WordDataService";
// import Vue from 'vue'

////// import JsonCSV from 'vue-json-csv' 

export default {
  name: "add-tutorial",
  data() {
    return {
      t:[],
    json_data: [
                {
                    'name': 'Tony Peña',
                    'city': 'New York',
                    'country': 'United States',
                    'birthdate': '1978-03-15',
                    'phone': {
                        'mobile': '1-541-754-3010',
                        'landline': '(541) 754-3010'
                    }
                },
                {
                    'name': 'Thessaloniki',
                    'city': 'Athens',
                    'country': 'Greece',
                    'birthdate': '1987-11-23',
                    'phone': {
                        'mobile': '+1 855 275 5071',
                        'landline': '(2741) 2621-244'
                    }
                }
            ],

      // temp:[],
      // temptdy:[],
      // temptmr:[],
         

      TdyToolsChker:{
        BowNeeD_06:0,
        BowNeeD_07:0,
        BowNeeD_08:0,
        BowNeeD_09:0,
        BowNeeD_10:0,
        BowNeeD_11:0,

        BowNeeD_12:0,
        BowNeeD_13:0,
        BowNeeD_14:0,
        BowNeeD_15:0,
        BowNeeD_16:0,
        BowNeeD_17:0,

        BowNeeD_18:0,
        BowNeeD_19:0,
        BowNeeD_20:0,
        BowNeeD_21:0,
        BowNeeD_22:0, 
        Tmr:[0,0,0,0,0,0, 0,0,0,0,0,0, 0,0,0,0,0],
      },
      temp: {  
        code: "",
        codeMessage:"",
        data: {
          list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } 
        }, 
      },
      temptdy: {  
        code: "",
        codeMessage:"",
        data: {
          list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } 
        }, 
      }, 
      temptmr: {  
        code: "",
        codeMessage:"",
        data: {
          list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } 
        }, 
      },  
      tempall: {  
        code: "",
        codeMessage:"",
        data: {
          list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } 
        }, 
      },   
      list: {
            amount:"",
            orderStatus: "",
            createdAt  : "",
            sessionStartDate  : "",
            sessionStartTime : "",
            orderNo : "",
            productCode   :  "", 
            contactLastName  : "",
            contactFirstName : "",  
          } , 
       
      submitted: false
      ,
      word: {  
        spell_tayal: "",
        spell_zh_tw: "",  
        season: "",
        topic:"",
        description: "", 
      },
      // 給換頁面 顯示資料使用
      tab:[],


    };
  }, 
  computed: { 
  
  c: function () {
      // `this` points to the vm instance 
      vv = 0 ;
      var ary=[0,0,vv]
      console.log('- -- - -- - -- -') ;
        console.log(this.temptmr.data.list[0].sessionStartTime.slice(0,2)) ;
      if ( this.temptmr.data.list[0].sessionStartTime.slice(0,2) == '10' )
      {   
        
        } 
      return  ary
    }
  , 
    // saveTutorial() {
    //   var data = {
    //     title: this.tutorial.title,
    //     description: this.tutorial.description,
    //     published: false
    //   };

    //   TutorialDataService.create(data)
    //     .then(() => {
    //       console.log("Created new item successfully!");
    //       this.submitted = true;
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }, 
    // newTutorial() {
    //   this.submitted = false;
    //   this.tutorial = {
    //     title: "",
    //     description: "",
    //     published: false
    //   };
    // },
    // csvExport(arrData) {
    //    console.log(this.users)
    //   let csvContent = "data:text/csv;charset=utf-8,";
    //   csvContent += [
    //     Object.keys(arrData[0]).join(";"),
    //     ...arrData.map(item => Object.values(item).join(";"))
    //   ]
    //     .join("\n")
    //     .replace(/(^\[)|(\]$)/gm, "");

    //   const data = encodeURI(csvContent);
    //   const link = document.createElement("a");
    //   link.setAttribute("href", data);
    //   link.setAttribute("download", "export.csv");
    //   link.click();
    // }, 
    autoGetDate(){ 
      today = new Date();
      let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + today.getDate() 
          console.log( " 今天 " + formatted_date );  
          return formatted_date 
    }, 
    ddd( chkDATE ){ 
          var today, someday, text, r;
              today = new Date();
              someday = new Date(); 
              
              let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + today.getDate()
      
              console.log( " 今天 " + formatted_date );  
              
              const str = '2021-03-21';

              chkDATE_ary = chkDATE.split('-');
              
              if (  chkDATE_ary[2] >= today.getMonth() + 1  &&   chkDATE_ary[3] > today.getDate() )
              { 
                  // 月份比較大 日期比較大 == > 確實在 之後的日子 屬於未 報到訂單
                  return true
              } 
    },  
    paymentChk(key){ 
      var r = true
      if (key =='3HEH3P'|key =='YR2EZI'|key =='NKJ3OQ'|key =='VEY9F8'|key =='6ILOVL' |key =='MLCO18') { r = false ; }
      return r
    },

    CuptPeople(T)
    { 
      var f = T.slice(0,2);
      console.log( "ff = " + f);
      
      return f 
    },

 

    ChkOrdType(key){

      switch (key) {  
 
// 票券類別
            case 'UPEBNV':
              return 'gov券'
              break;
            case 'KZLQHF':
              return '12套票'
              break; 

            case '9BQGWI':
              return '自備弓長距'
              break; 
// 教練專班
            case 'NKJ3OQ':
              return '團體-基礎班'
              break;
            case 'VEY9F8':
              return '反曲弓-個別課'
              break;  
            case '6ILOVL':
              return '個別-基礎班'
              break;

// 體驗類別
            case 'RYMYSI':
              return '親子體驗'
              break;     
            case 'Q0J3UR':
              return '輕體驗'
              break; 

// 個別 -電話預約
            case 'MLCO18':
              return '電話預約'
              break;     
            case 'DP13QZ':
              return '會員預約'
              break; 
              

// 團體方案
            case '3HEH3P':
              return '團體十人pa'
              break;  
            case 'YR2EZI': 
              return '烤肉pa'
              break;       
            case  'FIT12B':
              return '夜光pa親子體驗'
              break;  

            default:
              return '未分類'+ key
              break;
          }
    }, 
  },
  mounted() { 

    const apiRezioDta = axios.create({
        baseURL: 'https://cors-anywhere.herokuapp.com/https://api.rezio.io/',
        headers: {
            "Content-Type": "application/json", 
            "X-Lang":"en",
            "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
            "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
        }
    })

    const getProductList_backendNow = () => apiRezioDta.get(); 
          getProductList_backendNow()
              .then( (response) => 
              {
                this.t = JSON.parse( JSON.stringify(response.data) );  
                console.log( "t")
                console.log( response);
              })
              .catch( (error) => console.log(error));

    const getProductList_backendtdy = () => apiRezioDta.get(cc(11)); 
          getProductList_backendtdy()
              .then( (response) => 
              {
                this.temptdy = JSON.parse( JSON.stringify(response.data) );  
                console.log( "= = = = = < temptdy  > = = = = =")
                console.log( response);
              })
              .catch( (error) => console.log(error));

    const getProductList_backendtmr = () => apiRezioDta.get(cc(12)); 
          getProductList_backendtmr()
              .then( (response) => 
              {
                this.temptmr = JSON.parse( JSON.stringify(response.data) );  
                console.log( "= = = = = < temptmr  > = = = = =")
                console.log( response);
              })
              .catch( (error) => console.log(error));          


    const getProductList_backend = () => apiRezioDta.get(cc(13));  
    // const getProductList_backend = () => apiRezioDta.get( cc(4,autoGetDate()));
          getProductList_backend()
              .then( (response) => 
              {
                this.temp = JSON.parse( JSON.stringify(response.data) );  
                console.log( "= = = = = < temp  > = = = = =")
                console.log(response.data);
              })
              .catch( (error) => console.log(error)); 

    let addurl_1 = 'v1/order/list'; 
    let addurl_2 = '/v1/setting/bookingInfo';  
    let addurl_3 ='/v1/setting/pricePolicy';  

    function cc(key,item){
      var today
          today = new Date();
          let fdta = '' ;

      switch (key) {
             
            case 1: 
              fdta = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + today.getDate(); 
              console.log( "shun tell  cmd = " + fdta );
              return '/v1/order/list?dateType=2&from='+fdta+'&to='+fdta
              break; 
              
            case 11: 
              fdta = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + (today.getDate() ); 
              var cmd1 = '/v1/order/list?dateType=2&from='+fdta+'&to='+fdta
              console.log( "shun tell  cmd3 = " + cmd1 );
              return cmd1
              break;
            case 12: 
              fdta = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + (today.getDate() + 1); 
              var cmd2 = '/v1/order/list?dateType=2&from='+fdta+'&to='+fdta
              console.log( "shun tell  cmd3 = " + cmd2 );
              return cmd2
              break; 
            case 13: 
              fdta = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + (today.getDate() + 2); 
              var cmd3 = '/v1/order/list?dateType=2&from='+fdta+'&to='+fdta
              console.log( "shun tell  cmd3 = " + cmd3 );
              return cmd3
              break; 
            case 99:  
              return '/v1/order/list'
              break;  
            case 98:  
              return '/v1/order/list?dateType=2&from=2021-11-25&to=2021-11-25'
              break; 
            case 2:
              return '/v1/setting/bookingInfo'
              break;
            case 3:
              return '/v1/setting/pricePolicy'
              break;  
            default:
              break;
          }
       };  

    const g = () => gDate();  
    function gDate()
    {
        // console.log( "this.temp ===" +this.temp)
        return "this.temp ===" +this.temp

    };


    // Vue.component('downloadCsv', JsonCSV);
  },
};

 // function  autoGetDate(){ 
    //   var today
    //   today = new Date();
    //   let formatted_date = today.getFullYear() + "-" + (today.getMonth() + 1)+ "-" + today.getDate() 
    //       console.log( " 今天 " + formatted_date );  
    //       return formatted_date 
    // }  
    // console.log("Hi shun ru here?"  )


    // const uuid = xxxxxx;
    // const token = xxxxxx;

    // const instance = axios.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   headers: {'X-Custom-Header': 'foobar'}
    // });

    // //新增一個變數叫HexSchool api，它是一個axios實體物件。
    // //我們在裏面設定config物件，讓我們之後可以重用
    // const apiHexSchool = axios.create({
    //     baseURL: `https://course-ec-api.hexschool.io/api/${uuid}`,
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Accept": "application/json",
    //         "Authorization": `Bearer ${token}`,
    //     }
    // })

    // //新增商品到後台。在.post()裏第一個参數，只需放入URL後面的部分
    // const addProduct_backend = data => apiHexSchool.post('/admin/ec/product',data);

    // addProduct_backend(data)
    //     .then( (response) => console.log(response))
    //     .catch( (error) => console.log(error));



    // axios.get('https://randomuser.me/api/?gender=female&nat=us')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })




    // axios.get('https://api.rezio.io/v1/config')
    // .then( (response) =>  
    // {  this.temp = response;
    //    console.log(response);
    // })


// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');

// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };

// request.send();



// axios({
//   method: 'get',
//   baseURL: 'https://api.rezio.io/',
//   url: '/v1/config',
//   headers: {
//            'Content-Type': 'application/json',
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
//         }
  
// })
//   .then((result) => { console.log(result.data) })
//   .catch((err) => { console.error(err) })


// fetch('https://randomuser.me/api/')
//     .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


// let responseee = fetch('https://randomuser.me/api/',{
//     headers: {
//         Authentication: 'secret'
//     }
// });

// console.log("responseee = " + responseee)

// const url = 'https://api.rezio.io//v1/config'

// let headers = {
//     "Content-Type": "application/json",
//     "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }

// fetch(url, {
//     method: "GET",
//     headers: headers,
// })
//     .then( (response) => response.json())
//     .then( (json) => console.log(json));

// console.log("- -- - -- here")


// var xhr = new XMLHttpRequest();
// //需要告知要傳遞的資料格式
// xhr.open("GET","/https://api.rezio.io//v1/config");
// xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8"); 

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//   }
// };


// xhr.send();

// var request = new XMLHttpRequest();

// request.open('GET', 'https://api.rezio.io/v1/config');
// request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.rezio.io/v1/order/list');
 
	
// request.setRequestHeader('Content-Type', 'application/json');
// request.setRequestHeader('X-Lang', 'en');
// request.setRequestHeader('X-Auth-StoreUuid', '001e81f1-3111-485e-8c22-6644cb2df11c');
// request.setRequestHeader('X-Auth-Key', '0b4ae1cc6859fc3a47b06d27677eb07c');

// request.onreadystatechange = function () {
//    console.log('==> Status:' + this.readyState);
   
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);
//     // console.log('Bodyd:', response);
//     this.temp = this.responseText ;
//   }
// };
// request.send();

// fetch('https://api.rezio.io//v1/config',
//  {
// method: 'get',
// headers: {
//           "Content-Type": "application/json",
//             "X-Lang":"en",
//             "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
//             "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
// }})
// .then((response) => {
//         console.log(response); 
//     })
//     .catch((error) => {
//         console.log(`Error: ${error}`);
//     })


// console.log("- -- - -- here")

// body: new URLSearchParams([
// ["username", "Lan"],["password", "123456"]
// ]).toString()
// })
// .then(res => {
// console.log(res);
// return res.text();
// })
// .then(data => {
// console.log(data);
// })


    // let url  = 'https://api.rezio.io/v1/order/list'; // 使用時會遇到 Error: Network Error
    //                                                   // at e.exports (createError.js:16)
    //                                                   // at XMLHttpRequest.g.onerror (xhr.js:117)
    // let url2 = 'https://cors-anywhere.herokuapp.com/https://api.rezio.io/';
    //                 // 加注 cors-anywhere 後解決。

    // let addurl_1 = 'v1/order/list';

    // let addurl_2 = '/v1/setting/bookingInfo'; 

    // let addurl_3 ='/v1/setting/pricePolicy';

    // let dtaparamm ='';
                    // let dtaparamm ='?itemPerPage=';

    // let headers = {
    //         "Content-Type": "application/json", 
    //         "X-Lang":"en",
    //         "X-Auth-StoreUuid": '001e81f1-3111-485e-8c22-6644cb2df11c',
    //         "X-Auth-Key": '0b4ae1cc6859fc3a47b06d27677eb07c',
    // }; 
    // axios({
    //       method: 'get', 
    //       url: url2 + addurl_1 + dtaparamm,  
    //       headers: headers,   
    //   })
    //  .then( (response) =>  
    // {   
    //    this.temp = JSON.parse( JSON.stringify(response.data) ); 
    //    console.log(response);
    // })
    // .catch( (error) => console.log(error))
 

    //新增一個變數叫HexSchool api，它是一個axios實體物件。
    //我們在裏面設定config物件，讓我們之後可以重用

</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>


