// pages/shenqing/shenqing.js
// pages/settled/settled.js
let app = getApp()
var list = []
const api = app.globalData.api;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: '',
    showCheck: false,
    showId: false,
    items: [{
        name: '城市合伙人',
        value: '1'
      },
      {
        name: '县级合伙人',
        value: '2'
      },
      {
        name: '乡镇合伙人',
        value: '3'
      },
    ],
    showDialog: false,
    name: '', //合伙人名称
    name1: '', //合伙人名称
    showHehuo: false, //显示所属上级
    region: [],
    areaTxt: '',
    enter_xiang: '',
    idType: '', //申请身份的类型 1 2 
    bossName: '', //所属上级的名字
    bossId: '', //所属上级类型合伙人
    bossIdName: '', //根据不同类型合伙人显示
    showBossName: false, //选择后显示boss名字
    showXiang: false,
    mingzi: '', //个人信息 名字
    region1: [],
    // 提交上传的数据
    shenfen: '', //申请的申请
    boss_id: '', //所属上级id
    enter_sheng: '请选择', //省份
    enter_shi: '', //市
    enter_xian: '', //县级
    enter_xiang: '', //乡镇
    enter_address_details: '', //详细地址
    name: '', //姓名
    sex: '', //性别
    birth_time: '请选择', //出生年月
    id_num: '', //身份证号
    phone: '', //联系电话
    census_address: [], //户籍详细地址
    census_address_details: '', //户籍详细地址
    region1: '请选择所在地区',
    region2: '',
    region3: '',
    bossMingzi: '',
    bossShenfen: '', //选择申请的身份
    showBossMing: false, //显示boss名字
    shangjiId: '', //上级id
    multiIndex: [0, 0],
    multiArray: [
      ['北京市', '安徽省', "福建省", "甘肃省", "广东省", "广西省", "贵州省", "海南省", "河北省", "河南省", "黑龙江省", "湖北省", "湖南省", "吉林省", "江苏省", "江西省", "辽宁省", "内蒙古省", "宁夏回族自治区", "青海省", "山东省", "山西省", "陕西省", "上海市", "四川省", "天津市", "西藏自治区", "新疆维吾尔自治区", "云南省", "浙江省", "重庆市", "香港特别行政区", "澳门特别行政区", "台湾省"],
      ['北京市']
    ],
    objectMultiArray: [{
        "regid": "2",
        "parid": "1",
        "regname": "北京市",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "3",
        "parid": "1",
        "regname": "安徽省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "4",
        "parid": "1",
        "regname": "福建省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "5",
        "parid": "1",
        "regname": "甘肃省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "6",
        "parid": "1",
        "regname": "广东省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "7",
        "parid": "1",
        "regname": "广西省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "8",
        "parid": "1",
        "regname": "贵州省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "9",
        "parid": "1",
        "regname": "海南省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "10",
        "parid": "1",
        "regname": "河北省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "11",
        "parid": "1",
        "regname": "河南省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "12",
        "parid": "1",
        "regname": "黑龙江省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "13",
        "parid": "1",
        "regname": "湖北省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "14",
        "parid": "1",
        "regname": "湖南省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "15",
        "parid": "1",
        "regname": "吉林省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "16",
        "parid": "1",
        "regname": "江苏省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "17",
        "parid": "1",
        "regname": "江西省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "18",
        "parid": "1",
        "regname": "辽宁省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "19",
        "parid": "1",
        "regname": "内蒙古自治区",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "20",
        "parid": "1",
        "regname": "宁夏回族自治区",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "21",
        "parid": "1",
        "regname": "青海省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "22",
        "parid": "1",
        "regname": "山东省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "23",
        "parid": "1",
        "regname": "山西省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "24",
        "parid": "1",
        "regname": "陕西省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "25",
        "parid": "1",
        "regname": "上海市",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "26",
        "parid": "1",
        "regname": "四川省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "27",
        "parid": "1",
        "regname": "天津市",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "28",
        "parid": "1",
        "regname": "西藏自治区",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "29",
        "parid": "1",
        "regname": "新疆自治区",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "30",
        "parid": "1",
        "regname": "云南省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "31",
        "parid": "1",
        "regname": "浙江省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "32",
        "parid": "1",
        "regname": "重庆市",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "33",
        "parid": "1",
        "regname": "香港省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "34",
        "parid": "1",
        "regname": "澳门省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "35",
        "parid": "1",
        "regname": "台湾省",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "36",
        "parid": "3",
        "regname": "合肥市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "37",
        "parid": "3",
        "regname": "芜湖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "38",
        "parid": "3",
        "regname": "蚌埠市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "39",
        "parid": "3",
        "regname": "淮南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "40",
        "parid": "3",
        "regname": "马鞍山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "41",
        "parid": "3",
        "regname": "淮北市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "42",
        "parid": "3",
        "regname": "铜陵市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "43",
        "parid": "3",
        "regname": "安庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "44",
        "parid": "3",
        "regname": "黄山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "45",
        "parid": "3",
        "regname": "滁州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "46",
        "parid": "3",
        "regname": "阜阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "47",
        "parid": "3",
        "regname": "宿州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "48",
        "parid": "3",
        "regname": "六安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "49",
        "parid": "3",
        "regname": "亳州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "50",
        "parid": "3",
        "regname": "池州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "51",
        "parid": "3",
        "regname": "宣城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "52",
        "parid": "3",
        "regname": "巢湖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "53",
        "parid": "3",
        "regname": "无为市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "54",
        "parid": "3",
        "regname": "潜山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "55",
        "parid": "3",
        "regname": "桐城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "56",
        "parid": "3",
        "regname": "天长市",
        "regtype": "2",
        "ageid": "0"
      } , {
        "regid": "57",
        "parid": "3",
        "regname": "明光市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "58",
        "parid": "3",
        "regname": "界首市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "59",
        "parid": "3",
        "regname": "广德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "60",
        "parid": "3",
        "regname": "宁国市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "61",
        "parid": "2",
        "regname": "北京市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "62",
        "parid": "4",
        "regname": "福州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "63",
        "parid": "4",
        "regname": "厦门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "64",
        "parid": "4",
        "regname": "莆田市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "65",
        "parid": "4",
        "regname": "三明市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "66",
        "parid": "4",
        "regname": "泉州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "67",
        "parid": "4",
        "regname": "漳州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "68",
        "parid": "4",
        "regname": "南平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "69",
        "parid": "4",
        "regname": "龙岩市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "70",
        "parid": "4",
        "regname": "宁德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "71",
        "parid": "4",
        "regname": "福清市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "72",
        "parid": "4",
        "regname": "永安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "73",
        "parid": "4",
        "regname": "石狮市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "74",
        "parid": "4",
        "regname": "晋江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "75",
        "parid": "4",
        "regname": "南安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "76",
        "parid": "4",
        "regname": "龙海市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "77",
        "parid": "4",
        "regname": "邵武市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "78",
        "parid": "4",
        "regname": "武夷山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "79",
        "parid": "4",
        "regname": "建瓯市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "80",
        "parid": "4",
        "regname": "漳平市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "81",
        "parid": "4",
        "regname": "福安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "82",
        "parid": "4",
        "regname": "福鼎市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "83",
        "parid": "5",
        "regname": "兰州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "84",
        "parid": "5",
        "regname": "嘉峪关市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "85",
        "parid": "5",
        "regname": "金昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "86",
        "parid": "5",
        "regname": "白银市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "87",
        "parid": "5",
        "regname": "天水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "88",
        "parid": "5",
        "regname": "武威市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "89",
        "parid": "5",
        "regname": "张掖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "90",
        "parid": "5",
        "regname": "平凉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "91",
        "parid": "5",
        "regname": "酒泉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "92",
        "parid": "5",
        "regname": "庆阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "93",
        "parid": "5",
        "regname": "定西市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "94",
        "parid": "5",
        "regname": "陇南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "95",
        "parid": "5",
        "regname": "华亭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "96",
        "parid": "5",
        "regname": "玉门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "96",
        "parid": "5",
        "regname": "敦煌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "97",
        "parid": "5",
        "regname": "临夏市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "98",
        "parid": "5",
        "regname": "合作市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "99",
        "parid": "6",
        "regname": "广州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "100",
        "parid": "6",
        "regname": "深圳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "101",
        "parid": "6",
        "regname": "韶关市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "102",
        "parid": "6",
        "regname": "珠海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "103",
        "parid": "6",
        "regname": "佛山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "104",
        "parid": "6",
        "regname": "汕头市",
        "regtype": "3",
        "ageid": "0"
      }, {
        "regid": "105",
        "parid": "6",
        "regname": "湛江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "106",
        "parid": "6",
        "regname": "江门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "107",
        "parid": "6",
        "regname": "肇庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "108",
        "parid": "6",
        "regname": "茂名市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "109",
        "parid": "6",
        "regname": "梅州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "110",
        "parid": "6",
        "regname": "惠州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "111",
        "parid": "6",
        "regname": "汕尾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "112",
        "parid": "6",
        "regname": "河源市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "113",
        "parid": "6",
        "regname": "阳江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "114",
        "parid": "6",
        "regname": "清远市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "115",
        "parid": "6",
        "regname": "东莞市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "116",
        "parid": "6",
        "regname": "中山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "117",
        "parid": "6",
        "regname": "揭阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "118",
        "parid": "6",
        "regname": "云浮市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "119",
        "parid": "6",
        "regname": "乐昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "120",
        "parid": "6",
        "regname": "南雄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "121",
        "parid": "6",
        "regname": "台山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "122",
        "parid": "6",
        "regname": "开平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "123",
        "parid": "6",
        "regname": "鹤山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "124",
        "parid": "6",
        "regname": "恩平市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "125",
        "parid": "6",
        "regname": "廉江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "126",
        "parid": "6",
        "regname": "雷州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "127",
        "parid": "6",
        "regname": "吴川市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "128",
        "parid": "6",
        "regname": "高州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "129",
        "parid": "6",
        "regname": "化州市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "130",
        "parid": "6",
        "regname": "信宜市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "131",
        "parid": "6",
        "regname": "四会市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "132",
        "parid": "6",
        "regname": "兴宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "133",
        "parid": "6",
        "regname": "陆丰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "134",
        "parid": "6",
        "regname": "阳春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "135",
        "parid": "6",
        "regname": "英德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "136",
        "parid": "6",
        "regname": "连州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "137",
        "parid": "6",
        "regname": "普宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "138",
        "parid": "6",
        "regname": "罗定市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "139",
        "parid": "7",
        "regname": "南宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "140",
        "parid": "7",
        "regname": "桂林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "141",
        "parid": "7",
        "regname": "崇左市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "142",
        "parid": "7",
        "regname": "柳州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "143",
        "parid": "7",
        "regname": "来宾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "144",
        "parid": "7",
        "regname": "防城港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "145",
        "parid": "7",
        "regname": "梧州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "146",
        "parid": "7",
        "regname": "贺州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "147",
        "parid": "7",
        "regname": "玉林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "148",
        "parid": "7",
        "regname": "贵港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "149",
        "parid": "7",
        "regname": "白色市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "150",
        "parid": "7",
        "regname": "钦州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "151",
        "parid": "7",
        "regname": "河池市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "152",
        "parid": "7",
        "regname": "北海市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "153",
        "parid": "7",
        "regname": "平祥市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "154",
        "parid": "7",
        "regname": "合山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "155",
        "parid": "7",
        "regname": "岑溪市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "156",
        "parid": "7",
        "regname": "北流市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "157",
        "parid": "7",
        "regname": "桂平市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "158",
        "parid": "7",
        "regname": "宜州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "159",
        "parid": "7",
        "regname": "东兴市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "160",
        "parid": "8",
        "regname": "贵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "161",
        "parid": "8",
        "regname": "安顺市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "162",
        "parid": "8",
        "regname": "毕节市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "163",
        "parid": "8",
        "regname": "六盘水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "164",
        "parid": "8",
        "regname": "黔东南自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "165",
        "parid": "8",
        "regname": "黔南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "166",
        "parid": "8",
        "regname": "黔西南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "167",
        "parid": "8",
        "regname": "铜仁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "168",
        "parid": "8",
        "regname": "遵义市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "169",
        "parid": "8",
        "regname": "清镇市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "170",
        "parid": "8",
        "regname": "盘州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "171",
        "parid": "8",
        "regname": "赤水市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "172",
        "parid": "8",
        "regname": "仁怀市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "173",
        "parid": "8",
        "regname": "兴义市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "174",
        "parid": "8",
        "regname": "兴仁市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "175",
        "parid": "8",
        "regname": "凯里市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "176",
        "parid": "8",
        "regname": "都匀市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "177",
        "parid": "8",
        "regname": "福泉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "178",
        "parid": "9",
        "regname": "海口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "179",
        "parid": "9",
        "regname": "三亚市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "180",
        "parid": "9",
        "regname": "三沙市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "181",
        "parid": "9",
        "regname": "儋州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "182",
        "parid": "9",
        "regname": "五指山市",
        "regtype": "2",
        "ageid": "0"
      },
      //  {
      //   "regid": "125",
      //   "parid": "9",
      //   "regname": "澄迈县",
      //   "regtype": "2",
      //   "ageid": "0"
      // },
      // , {
      //   "regid": "126",
      //   "parid": "9",
      //   "regname": "定安县",
      //   "regtype": "2",
      //   "ageid": "0"
      // }, 
      {
        "regid": "183",
        "parid": "9",
        "regname": "东方市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "184",
        "parid": "9",
        "regname": "乐东市",
        "regtype": "2",
        "ageid": "0"
      },
      // {
      //   "regid": "129",
      //   "parid": "9",
      //   "regname": "临高县",
      //   "regtype": "2",
      //   "ageid": "0"
      // },
      {
        "regid": "185",
        "parid": "9",
        "regname": "陵水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "186",
        "parid": "9",
        "regname": "琼海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "187",
        "parid": "9",
        "regname": "琼中市",
        "regtype": "2",
        "ageid": "0"
      }
      // , {
      //   "regid": "133",
      //   "parid": "9",
      //   "regname": "屯昌县",
      //   "regtype": "2",
      //   "ageid": "0"
      // }
      , {
        "regid": "188",
        "parid": "9",
        "regname": "万宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "189",
        "parid": "9",
        "regname": "文昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "190",
        "parid": "9",
        "regname": "儋州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "191",
        "parid": "10",
        "regname": "石家庄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "192",
        "parid": "10",
        "regname": "保定市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "193",
        "parid": "10",
        "regname": "唐山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "194",
        "parid": "10",
        "regname": "秦皇岛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "195",
        "parid": "10",
        "regname": "邯郸市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "196",
        "parid": "10",
        "regname": "邢台市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "197",
        "parid": "10",
        "regname": "张家口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "198",
        "parid": "10",
        "regname": "承德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "199",
        "parid": "10",
        "regname": "沧州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "200",
        "parid": "10",
        "regname": "廊坊市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "201",
        "parid": "10",
        "regname": "衡水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "202",
        "parid": "10",
        "regname": "辛集市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "203",
        "parid": "10",
        "regname": "晋州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "204",
        "parid": "10",
        "regname": "新乐市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "205",
        "parid": "10",
        "regname": "滦州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "206",
        "parid": "10",
        "regname": "遵化市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "207",
        "parid": "10",
        "regname": "迁安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "208",
        "parid": "10",
        "regname": "武安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "209",
        "parid": "10",
        "regname": "南宫市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "210",
        "parid": "10",
        "regname": "沙河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "211",
        "parid": "10",
        "regname": "涿州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "212",
        "parid": "10",
        "regname": "定州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "213",
        "parid": "10",
        "regname": "安国市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "214",
        "parid": "10",
        "regname": "高碑店市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "215",
        "parid": "10",
        "regname": "平泉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "216",
        "parid": "10",
        "regname": "泊头市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "217",
        "parid": "10",
        "regname": "任丘市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "218",
        "parid": "10",
        "regname": "黄骅市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "219",
        "parid": "10",
        "regname": "河间市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "220",
        "parid": "10",
        "regname": "霸州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "221",
        "parid": "10",
        "regname": "三河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "222",
        "parid": "10",
        "regname": "深州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "223",
        "parid": "11",
        "regname": "郑州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "224",
        "parid": "11",
        "regname": "洛阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "225",
        "parid": "11",
        "regname": "开封市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "226",
        "parid": "11",
        "regname": "安阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "227",
        "parid": "11",
        "regname": "鹤壁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "228",
        "parid": "11",
        "regname": "平顶山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "229",
        "parid": "11",
        "regname": "焦作市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "230",
        "parid": "11",
        "regname": "新乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "231",
        "parid": "11",
        "regname": "焦作市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "232",
        "parid": "11",
        "regname": "濮阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "233",
        "parid": "11",
        "regname": "许昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "234",
        "parid": "11",
        "regname": "漯河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "235",
        "parid": "11",
        "regname": "三门峡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "236",
        "parid": "11",
        "regname": "南阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "237",
        "parid": "11",
        "regname": "商丘市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "238",
        "parid": "11",
        "regname": "信阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "239",
        "parid": "11",
        "regname": "周口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "240",
        "parid": "11",
        "regname": "驻马店市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "241",
        "parid": "11",
        "regname": "巩义市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "242",
        "parid": "11",
        "regname": "荥阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "243",
        "parid": "11",
        "regname": "新密市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "244",
        "parid": "11",
        "regname": "新郑市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "245",
        "parid": "11",
        "regname": "登封市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "246",
        "parid": "11",
        "regname": "偃师市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "247",
        "parid": "11",
        "regname": "舞钢市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "248",
        "parid": "11",
        "regname": "汝州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "249",
        "parid": "11",
        "regname": "林州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "250",
        "parid": "11",
        "regname": "长垣市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "251",
        "parid": "11",
        "regname": "卫辉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "252",
        "parid": "11",
        "regname": "辉县市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "253",
        "parid": "11",
        "regname": "沁阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "254",
        "parid": "11",
        "regname": "孟州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "255",
        "parid": "11",
        "regname": "禹州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "256",
        "parid": "11",
        "regname": "长葛市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "257",
        "parid": "11",
        "regname": "义马市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "258",
        "parid": "11",
        "regname": "灵宝市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "259",
        "parid": "11",
        "regname": "邓州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "260",
        "parid": "11",
        "regname": "永城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "261",
        "parid": "11",
        "regname": "项城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "262",
        "parid": "11",
        "regname": "济源市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "263",
        "parid": "12",
        "regname": "哈尔滨市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "264",
        "parid": "12",
        "regname": "齐齐哈尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "265",
        "parid": "12",
        "regname": "鸡西市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "266",
        "parid": "12",
        "regname": "鹤岗市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "267",
        "parid": "12",
        "regname": "双鸭山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "268",
        "parid": "12",
        "regname": "大庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "269",
        "parid": "12",
        "regname": "佳木斯市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "270",
        "parid": "12",
        "regname": "宜春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "271",
        "parid": "12",
        "regname": "七台河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "272",
        "parid": "12",
        "regname": "牡丹江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "273",
        "parid": "12",
        "regname": "黑河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "274",
        "parid": "12",
        "regname": "绥化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "275",
        "parid": "12",
        "regname": "尚志市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "276",
        "parid": "12",
        "regname": "五常市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "277",
        "parid": "12",
        "regname": "讷河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "278",
        "parid": "12",
        "regname": "虎林市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "279",
        "parid": "12",
        "regname": "密山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "280",
        "parid": "12",
        "regname": "铁山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "281",
        "parid": "12",
        "regname": "同江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "282",
        "parid": "12",
        "regname": "富锦市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "283",
        "parid": "12",
        "regname": "抚远市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "284",
        "parid": "12",
        "regname": "绥芬河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "285",
        "parid": "12",
        "regname": "海林市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "286",
        "parid": "12",
        "regname": "宁安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "287",
        "parid": "12",
        "regname": "穆棱市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "288",
        "parid": "12",
        "regname": "东宁市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "289",
        "parid": "12",
        "regname": "嫩江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "290",
        "parid": "12",
        "regname": "北安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "291",
        "parid": "12",
        "regname": "五大连池市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "292",
        "parid": "12",
        "regname": "安达市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "293",
        "parid": "12",
        "regname": "肇东市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "294",
        "parid": "12",
        "regname": "海伦市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "295",
        "parid": "12",
        "regname": "漠河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "296",
        "parid": "13",
        "regname": "武汉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "297",
        "parid": "13",
        "regname": "黄石市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "298",
        "parid": "13",
        "regname": "十堰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "299",
        "parid": "13",
        "regname": "宜昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "300",
        "parid": "13",
        "regname": "襄阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "301",
        "parid": "13",
        "regname": "鄂州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "302",
        "parid": "13",
        "regname": "荆门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "303",
        "parid": "13",
        "regname": "孝感市",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "304",
        "parid": "13",
        "regname": "荆州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "305",
        "parid": "13",
        "regname": "黄冈市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "306",
        "parid": "13",
        "regname": "随州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "307",
        "parid": "13",
        "regname": "咸宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "308",
        "parid": "13",
        "regname": "大冶市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "309",
        "parid": "13",
        "regname": "丹江口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "310",
        "parid": "13",
        "regname": "宜都市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "311",
        "parid": "13",
        "regname": "当阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "312",
        "parid": "13",
        "regname": "枝江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "313",
        "parid": "13",
        "regname": "老河口市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "314",
        "parid": "13",
        "regname": "枣阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "315",
        "parid": "13",
        "regname": "宜城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "316",
        "parid": "13",
        "regname": "钟祥市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "317",
        "parid": "13",
        "regname": "京山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "318",
        "parid": "13",
        "regname": "应城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "319",
        "parid": "13",
        "regname": "安陆市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "320",
        "parid": "13",
        "regname": "汉川市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "321",
        "parid": "13",
        "regname": "监利市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "322",
        "parid": "13",
        "regname": "石首市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "323",
        "parid": "13",
        "regname": "洪湖市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "324",
        "parid": "13",
        "regname": "松滋市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "325",
        "parid": "13",
        "regname": "麻城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "326",
        "parid": "13",
        "regname": "武穴市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "327",
        "parid": "13",
        "regname": "赤壁市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "328",
        "parid": "13",
        "regname": "广水市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "329",
        "parid": "13",
        "regname": "恩施市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "330",
        "parid": "13",
        "regname": "利川市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "331",
        "parid": "13",
        "regname": "仙桃市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "332",
        "parid": "13",
        "regname": "潜江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "333",
        "parid": "13",
        "regname": "天门市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "334",
        "parid": "14",
        "regname": "长沙市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "335",
        "parid": "14",
        "regname": "株洲市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "336",
        "parid": "14",
        "regname": "湘潭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "337",
        "parid": "14",
        "regname": "衡阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "338",
        "parid": "14",
        "regname": "邵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "339",
        "parid": "14",
        "regname": "岳阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "340",
        "parid": "14",
        "regname": "常德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "341",
        "parid": "14",
        "regname": "张家界市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "342",
        "parid": "14",
        "regname": "益阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "343",
        "parid": "14",
        "regname": "郴州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "344",
        "parid": "14",
        "regname": "永州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "345",
        "parid": "14",
        "regname": "怀化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "346",
        "parid": "14",
        "regname": "娄底市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "347",
        "parid": "14",
        "regname": "浏阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "348",
        "parid": "14",
        "regname": "宁乡市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "349",
        "parid": "14",
        "regname": "醴陵市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "350",
        "parid": "14",
        "regname": "湘乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "351",
        "parid": "14",
        "regname": "韶山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "352",
        "parid": "14",
        "regname": "耒阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "353",
        "parid": "14",
        "regname": "常宁市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "354",
        "parid": "14",
        "regname": "邵东市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "355",
        "parid": "14",
        "regname": "武冈市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "356",
        "parid": "14",
        "regname": "汨罗市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "357",
        "parid": "14",
        "regname": "临湘市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "358",
        "parid": "14",
        "regname": "津市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "359",
        "parid": "14",
        "regname": "沅江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "360",
        "parid": "14",
        "regname": "资兴市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "361",
        "parid": "14",
        "regname": "洪江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "362",
        "parid": "14",
        "regname": "冷水江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "363",
        "parid": "14",
        "regname": "涟源市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "364",
        "parid": "14",
        "regname": "吉首市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "365",
        "parid": "15",
        "regname": "长春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "366",
        "parid": "15",
        "regname": "吉林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "367",
        "parid": "15",
        "regname": "白城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "368",
        "parid": "15",
        "regname": "四平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "369",
        "parid": "15",
        "regname": "辽源市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "370",
        "parid": "15",
        "regname": "通化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "371",
        "parid": "15",
        "regname": "白山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "372",
        "parid": "15",
        "regname": "松原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "373",
        "parid": "15",
        "regname": "榆树市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "374",
        "parid": "15",
        "regname": "德惠市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "375",
        "parid": "15",
        "regname": "公主岭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "376",
        "parid": "15",
        "regname": "蛟河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "377",
        "parid": "15",
        "regname": "桦甸市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "378",
        "parid": "15",
        "regname": "舒兰市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "379",
        "parid": "15",
        "regname": "磐石市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "380",
        "parid": "15",
        "regname": "双辽市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "381",
        "parid": "15",
        "regname": "梅河口市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "382",
        "parid": "15",
        "regname": "集安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "383",
        "parid": "15",
        "regname": "临江市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "384",
        "parid": "15",
        "regname": "扶余市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "385",
        "parid": "15",
        "regname": "洮南市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "386",
        "parid": "15",
        "regname": "大安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "387",
        "parid": "15",
        "regname": "延吉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "388",
        "parid": "15",
        "regname": "图们市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "389",
        "parid": "15",
        "regname": "敦化市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "390",
        "parid": "15",
        "regname": "珲春市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "391",
        "parid": "15",
        "regname": "龙井市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "392",
        "parid": "15",
        "regname": "和龙市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "393",
        "parid": "16",
        "regname": "南京市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "394",
        "parid": "16",
        "regname": "苏州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "395",
        "parid": "16",
        "regname": "无锡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "396",
        "parid": "16",
        "regname": "常州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "397",
        "parid": "16",
        "regname": "徐州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "398",
        "parid": "16",
        "regname": "连云港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "399",
        "parid": "16",
        "regname": "南通市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "400",
        "parid": "16",
        "regname": "淮南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "401",
        "parid": "16",
        "regname": "盐城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "402",
        "parid": "16",
        "regname": "扬州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "403",
        "parid": "16",
        "regname": "镇江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "404",
        "parid": "16",
        "regname": "泰州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "405",
        "parid": "16",
        "regname": "宿迁市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "406",
        "parid": "16",
        "regname": "江阴市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "407",
        "parid": "16",
        "regname": "宜兴市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "408",
        "parid": "16",
        "regname": "新沂市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "409",
        "parid": "16",
        "regname": "邳州市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "410",
        "parid": "16",
        "regname": "溧阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "411",
        "parid": "16",
        "regname": "常熟市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "412",
        "parid": "16",
        "regname": "张家港市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "413",
        "parid": "16",
        "regname": "昆山市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "414",
        "parid": "16",
        "regname": "太仓市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "415",
        "parid": "16",
        "regname": "启东市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "417",
        "parid": "16",
        "regname": "海门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "418",
        "parid": "16",
        "regname": "海安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "419",
        "parid": "16",
        "regname": "东台市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "420",
        "parid": "16",
        "regname": "仪征市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "421",
        "parid": "16",
        "regname": "高邮市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "422",
        "parid": "16",
        "regname": "丹阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "423",
        "parid": "16",
        "regname": "扬中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "424",
        "parid": "16",
        "regname": "句容市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "425",
        "parid": "16",
        "regname": "兴化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "426",
        "parid": "16",
        "regname": "靖江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "427",
        "parid": "16",
        "regname": "泰兴市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "428",
        "parid": "17",
        "regname": "南昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "429",
        "parid": "17",
        "regname": "景德镇",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "430",
        "parid": "17",
        "regname": "萍乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "431",
        "parid": "17",
        "regname": "九江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "432",
        "parid": "17",
        "regname": "新余市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "433",
        "parid": "17",
        "regname": "鹰潭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "435",
        "parid": "17",
        "regname": "赣州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "436",
        "parid": "17",
        "regname": "上饶市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "437",
        "parid": "17",
        "regname": "吉安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "438",
        "parid": "17",
        "regname": "宜春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "439",
        "parid": "17",
        "regname": "抚州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "440",
        "parid": "17",
        "regname": "乐平市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "441",
        "parid": "17",
        "regname": "瑞昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "442",
        "parid": "17",
        "regname": "共青城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "443",
        "parid": "17",
        "regname": "庐山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "444",
        "parid": "17",
        "regname": "贵溪市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "445",
        "parid": "17",
        "regname": "陇南市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "446",
        "parid": "17",
        "regname": "瑞金市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "447",
        "parid": "17",
        "regname": "井冈山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "448",
        "parid": "17",
        "regname": "丰城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "449",
        "parid": "17",
        "regname": "樟树市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "450",
        "parid": "17",
        "regname": "高安市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "451",
        "parid": "17",
        "regname": "德兴市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "452",
        "parid": "18",
        "regname": "沈阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "453",
        "parid": "18",
        "regname": "大连市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "454",
        "parid": "18",
        "regname": "鞍山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "455",
        "parid": "18",
        "regname": "本溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "456",
        "parid": "18",
        "regname": "抚顺市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "457",
        "parid": "18",
        "regname": "丹东市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "458",
        "parid": "18",
        "regname": "锦州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "459",
        "parid": "18",
        "regname": "营口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "460",
        "parid": "18",
        "regname": "阜新市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "461",
        "parid": "18",
        "regname": "辽阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "462",
        "parid": "18",
        "regname": "铁岭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "463",
        "parid": "18",
        "regname": "盘锦市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "464",
        "parid": "18",
        "regname": "朝阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "465",
        "parid": "18",
        "regname": "葫芦岛市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "466",
        "parid": "18",
        "regname": "新民市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "467",
        "parid": "18",
        "regname": "瓦房店市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "468",
        "parid": "18",
        "regname": "庄河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "469",
        "parid": "18",
        "regname": "海城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "470",
        "parid": "18",
        "regname": "东港市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "471",
        "parid": "18",
        "regname": "凤城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "472",
        "parid": "18",
        "regname": "凌海市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "473",
        "parid": "18",
        "regname": "北镇市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "474",
        "parid": "18",
        "regname": "盖州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "475",
        "parid": "18",
        "regname": "大石桥市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "476",
        "parid": "18",
        "regname": "灯塔市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "477",
        "parid": "18",
        "regname": "开原市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "478",
        "parid": "18",
        "regname": "北票市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "479",
        "parid": "18",
        "regname": "兴城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "480",
        "parid": "18",
        "regname": "凌源市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "481",
        "parid": "19",
        "regname": "呼和浩特市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "482",
        "parid": "19",
        "regname": "包头市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "483",
        "parid": "19",
        "regname": "乌海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "484",
        "parid": "19",
        "regname": "赤峰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "485",
        "parid": "19",
        "regname": "通辽市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "486",
        "parid": "19",
        "regname": "鄂尔多斯市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "487",
        "parid": "19",
        "regname": "呼伦贝尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "488",
        "parid": "19",
        "regname": "巴彦淖尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "489",
        "parid": "19",
        "regname": "乌兰察布市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "490",
        "parid": "19",
        "regname": "霍林郭勒市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "491",
        "parid": "19",
        "regname": "满洲里市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "492",
        "parid": "19",
        "regname": "牙克石市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "493",
        "parid": "19",
        "regname": "扎兰屯市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "494",
        "parid": "19",
        "regname": "额尔古纳市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "495",
        "parid": "19",
        "regname": "根河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "496",
        "parid": "19",
        "regname": "丰镇市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "497",
        "parid": "19",
        "regname": "乌克浩特市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "498",
        "parid": "19",
        "regname": "阿尔山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "499",
        "parid": "19",
        "regname": "二连浩特市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "500",
        "parid": "19",
        "regname": "锡林浩特市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "501",
        "parid": "20",
        "regname": "银川市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "502",
        "parid": "20",
        "regname": "固原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "503",
        "parid": "20",
        "regname": "石嘴山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "504",
        "parid": "20",
        "regname": "吴忠市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "505",
        "parid": "20",
        "regname": "中卫市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "506",
        "parid": "20",
        "regname": "灵武市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "507",
        "parid": "20",
        "regname": "青铜峡市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "508",
        "parid": "21",
        "regname": "西宁市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "509",
        "parid": "21",
        "regname": "海东市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "510",
        "parid": "21",
        "regname": "玉树市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "511",
        "parid": "21",
        "regname": "同仁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "512",
        "parid": "21",
        "regname": "格尔木市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "513",
        "parid": "21",
        "regname": "德令哈市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "514",
        "parid": "21",
        "regname": "茫崖市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "515",
        "parid": "22",
        "regname": "济南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "516",
        "parid": "22",
        "regname": "青岛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "517",
        "parid": "22",
        "regname": "淄博市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "518",
        "parid": "22",
        "regname": "枣庄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "519",
        "parid": "22",
        "regname": "东营市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "520",
        "parid": "22",
        "regname": "烟台市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "521",
        "parid": "22",
        "regname": "潍坊市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "522",
        "parid": "22",
        "regname": "济宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "523",
        "parid": "22",
        "regname": "泰安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "524",
        "parid": "22",
        "regname": "威海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "525",
        "parid": "22",
        "regname": "日照市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "526",
        "parid": "22",
        "regname": "临沂市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "527",
        "parid": "22",
        "regname": "德州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "528",
        "parid": "22",
        "regname": "聊城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "529",
        "parid": "22",
        "regname": "滨州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "530",
        "parid": "22",
        "regname": "菏泽市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "531",
        "parid": "22",
        "regname": "胶州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "532",
        "parid": "22",
        "regname": "平度市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "533",
        "parid": "22",
        "regname": "莱西市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "534",
        "parid": "22",
        "regname": "滕州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "535",
        "parid": "22",
        "regname": "龙口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "536",
        "parid": "22",
        "regname": "莱阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "537",
        "parid": "22",
        "regname": "莱州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "538",
        "parid": "22",
        "regname": "招远市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "539",
        "parid": "22",
        "regname": "栖霞市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "540",
        "parid": "22",
        "regname": "海阳市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "541",
        "parid": "22",
        "regname": "青州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "542",
        "parid": "22",
        "regname": "诸城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "543",
        "parid": "22",
        "regname": "寿光市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "544",
        "parid": "22",
        "regname": "安丘市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "545",
        "parid": "22",
        "regname": "高密市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "546",
        "parid": "22",
        "regname": "昌邑市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "547",
        "parid": "22",
        "regname": "曲阜市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "548",
        "parid": "22",
        "regname": "邹城市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "549",
        "parid": "22",
        "regname": "新泰市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "550",
        "parid": "22",
        "regname": "肥城市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "551",
        "parid": "22",
        "regname": "荣成市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "552",
        "parid": "22",
        "regname": "乳山市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "553",
        "parid": "22",
        "regname": "乐陵市",
        "regtype": "2",
        "ageid": "0"
      },    {
        "regid": "554",
        "parid": "22",
        "regname": "禹城市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "555",
        "parid": "22",
        "regname": "临清市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "556",
        "parid": "22",
        "regname": "邹平市",
        "regtype": "2",
        "ageid": "0"
      },    {
        "regid": "557",
        "parid": "23",
        "regname": "太原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "558",
        "parid": "23",
        "regname": "长治市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "559",
        "parid": "23",
        "regname": "大同市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "560",
        "parid": "23",
        "regname": "晋城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "561",
        "parid": "23",
        "regname": "晋中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "562",
        "parid": "23",
        "regname": "临汾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "563",
        "parid": "23",
        "regname": "吕梁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "564",
        "parid": "23",
        "regname": "朔州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "565",
        "parid": "23",
        "regname": "忻州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "566",
        "parid": "23",
        "regname": "阳泉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "567",
        "parid": "23",
        "regname": "运城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "568",
        "parid": "23",
        "regname": "古交市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "569",
        "parid": "23",
        "regname": "高平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "570",
        "parid": "23",
        "regname": "运城怀仁市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "571",
        "parid": "23",
        "regname": "介休市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "572",
        "parid": "23",
        "regname": "永济市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "573",
        "parid": "23",
        "regname": "河津市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "574",
        "parid": "23",
        "regname": "原平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "575",
        "parid": "23",
        "regname": "侯马市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "576",
        "parid": "23",
        "regname": "霍州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "577",
        "parid": "23",
        "regname": "孝义市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "588",
        "parid": "23",
        "regname": "汾阳市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "589",
        "parid": "24",
        "regname": "西安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "590",
        "parid": "24",
        "regname": "铜川市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "591",
        "parid": "24",
        "regname": "宝鸡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "592",
        "parid": "24",
        "regname": "咸阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "593",
        "parid": "24",
        "regname": "渭南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "594",
        "parid": "24",
        "regname": "延安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "595",
        "parid": "24",
        "regname": "汉中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "596",
        "parid": "24",
        "regname": "榆林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "597",
        "parid": "24",
        "regname": "安康市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "598",
        "parid": "24",
        "regname": "商洛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "599",
        "parid": "24",
        "regname": "兴平市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "600",
        "parid": "24",
        "regname": "彬州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "601",
        "parid": "24",
        "regname": "韩城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "602",
        "parid": "24",
        "regname": "华阴市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "603",
        "parid": "24",
        "regname": "子长市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "604",
        "parid": "24",
        "regname": "神木市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "605",
        "parid": "25",
        "regname": "上海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "606",
        "parid": "26",
        "regname": "成都市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "607",
        "parid": "26",
        "regname": "自贡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "608",
        "parid": "26",
        "regname": "攀枝花市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "609",
        "parid": "26",
        "regname": "泸州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "610",
        "parid": "26",
        "regname": "德阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "611",
        "parid": "26",
        "regname": "绵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "612",
        "parid": "26",
        "regname": "广元市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "613",
        "parid": "26",
        "regname": "遂宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "614",
        "parid": "26",
        "regname": "内江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "615",
        "parid": "26",
        "regname": "乐山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "616",
        "parid": "26",
        "regname": "南充市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "617",
        "parid": "26",
        "regname": "眉山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "618",
        "parid": "26",
        "regname": "宜宾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "619",
        "parid": "26",
        "regname": "广安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "620",
        "parid": "26",
        "regname": "达州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "621",
        "parid": "26",
        "regname": "雅安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "622",
        "parid": "26",
        "regname": "巴中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "623",
        "parid": "26",
        "regname": "资阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "624",
        "parid": "26",
        "regname": "都江堰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "625",
        "parid": "26",
        "regname": "彭州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "626",
        "parid": "26",
        "regname": "邛崃市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "627",
        "parid": "26",
        "regname": "崇州市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "628",
        "parid": "26",
        "regname": "简阳市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "629",
        "parid": "26",
        "regname": "广汉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "630",
        "parid": "26",
        "regname": "什邡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "631",
        "parid": "26",
        "regname": "江油市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "632",
        "parid": "26",
        "regname": "射洪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "633",
        "parid": "26",
        "regname": "隆昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "634",
        "parid": "26",
        "regname": "峨眉山市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "635",
        "parid": "26",
        "regname": "阆中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "636",
        "parid": "26",
        "regname": "华蓥市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "637",
        "parid": "26",
        "regname": "万源市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "638",
        "parid": "26",
        "regname": "马尔康市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "639",
        "parid": "26",
        "regname": "康定市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "640",
        "parid": "26",
        "regname": "西昌市",
        "regtype": "2",
        "ageid": "0"
      },   {
        "regid": "641",
        "parid": "27",
        "regname": "天津市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "642",
        "parid": "28",
        "regname": "拉萨市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "643",
        "parid": "28",
        "regname": "日喀则市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "644",
        "parid": "28",
        "regname": "昌都市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "645",
        "parid": "28",
        "regname": "林芝市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "646",
        "parid": "28",
        "regname": "那曲市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "647",
        "parid": "28",
        "regname": "山南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "648",
        "parid": "29",
        "regname": "乌鲁木齐市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "649",
        "parid": "29",
        "regname": "克拉玛依市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "650",
        "parid": "29",
        "regname": "吐鲁番市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "651",
        "parid": "29",
        "regname": "哈密市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "652",
        "parid": "29",
        "regname": "昌吉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "653",
        "parid": "29",
        "regname": "阜康市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "654",
        "parid": "29",
        "regname": "博乐市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "655",
        "parid": "29",
        "regname": "阿拉山口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "656",
        "parid": "29",
        "regname": "库尔勒市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "657",
        "parid": "29",
        "regname": "阿克苏市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "658",
        "parid": "29",
        "regname": "库车市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "659",
        "parid": "29",
        "regname": "阿图什市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "660",
        "parid": "29",
        "regname": "喀什市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "661",
        "parid": "29",
        "regname": "和田市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "662",
        "parid": "29",
        "regname": "伊宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "663",
        "parid": "29",
        "regname": "奎屯市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "664",
        "parid": "29",
        "regname": "霍尔果斯市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "665",
        "parid": "29",
        "regname": "塔城市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "666",
        "parid": "29",
        "regname": "乌苏市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "667",
        "parid": "29",
        "regname": "阿勒泰市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "668",
        "parid": "29",
        "regname": "石河子市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "669",
        "parid": "29",
        "regname": "阿拉尔市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "670",
        "parid": "29",
        "regname": "图木舒克市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "671",
        "parid": "29",
        "regname": "五家渠市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "672",
        "parid": "29",
        "regname": "北屯市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "673",
        "parid": "29",
        "regname": "铁门关市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "674",
        "parid": "29",
        "regname": "双河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "675",
        "parid": "29",
        "regname": "可克达拉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "676",
        "parid": "29",
        "regname": "昆玉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "677",
        "parid": "29",
        "regname": "胡杨河市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "678",
        "parid": "30",
        "regname": "昆明市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "679",
        "parid": "30",
        "regname": "曲靖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "680",
        "parid": "30",
        "regname": "玉溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "681",
        "parid": "30",
        "regname": "保山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "682",
        "parid": "30",
        "regname": "保山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "683",
        "parid": "30",
        "regname": "昭通市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "684",
        "parid": "30",
        "regname": "丽江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "685",
        "parid": "30",
        "regname": "普洱市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "686",
        "parid": "30",
        "regname": "临沧市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "687",
        "parid": "30",
        "regname": "安宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "688",
        "parid": "30",
        "regname": "宣威市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "689",
        "parid": "30",
        "regname": "澄江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "690",
        "parid": "30",
        "regname": "腾冲市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "691",
        "parid": "30",
        "regname": "水富市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "692",
        "parid": "30",
        "regname": "楚雄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "639",
        "parid": "30",
        "regname": "个旧市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "640",
        "parid": "30",
        "regname": "开远市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "641",
        "parid": "30",
        "regname": "蒙自市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "642",
        "parid": "30",
        "regname": "弥勒市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "643",
        "parid": "30",
        "regname": "文山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "644",
        "parid": "30",
        "regname": "景洪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "645",
        "parid": "30",
        "regname": "大理市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "646",
        "parid": "30",
        "regname": "瑞丽市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "647",
        "parid": "30",
        "regname": "芒市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "648",
        "parid": "30",
        "regname": "泸水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "649",
        "parid": "30",
        "regname": "香格里拉市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "650",
        "parid": "31",
        "regname": "杭州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "651",
        "parid": "31",
        "regname": "宁波市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "652",
        "parid": "31",
        "regname": "温州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "653",
        "parid": "31",
        "regname": "嘉兴市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "654",
        "parid": "31",
        "regname": "湖州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "655",
        "parid": "31",
        "regname": "绍兴市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "656",
        "parid": "31",
        "regname": "金华市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "657",
        "parid": "31",
        "regname": "衢州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "658",
        "parid": "31",
        "regname": "舟山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "659",
        "parid": "31",
        "regname": "台州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "660",
        "parid": "31",
        "regname": "丽水市",
        "regtype": "2",
        "ageid": "0"
      },  {
        "regid": "661",
        "parid": "31",
        "regname": "建德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "662",
        "parid": "31",
        "regname": "余姚市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "663",
        "parid": "31",
        "regname": "慈溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "664",
        "parid": "31",
        "regname": "瑞安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "665",
        "parid": "31",
        "regname": "乐清市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "666",
        "parid": "31",
        "regname": "龙港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "667",
        "parid": "31",
        "regname": "海宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "668",
        "parid": "31",
        "regname": "平湖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "669",
        "parid": "31",
        "regname": "桐乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "670",
        "parid": "31",
        "regname": "诸暨市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "671",
        "parid": "31",
        "regname": "嵊州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "672",
        "parid": "31",
        "regname": "兰溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "673",
        "parid": "31",
        "regname": "义乌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "674",
        "parid": "31",
        "regname": "东阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "675",
        "parid": "31",
        "regname": "永康市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "676",
        "parid": "31",
        "regname": "江山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "677",
        "parid": "31",
        "regname": "温岭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "678",
        "parid": "31",
        "regname": "临海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "679",
        "parid": "31",
        "regname": "玉环市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "680",
        "parid": "31",
        "regname": "龙泉市",
        "regtype": "2",
        "ageid": "0"
      },{
        "regid": "681",
        "parid": "32",
        "regname": "重庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "682",
        "parid": "33",
        "regname": "香港特别行政区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "683",
        "parid": "34",
        "regname": "澳门特别行政区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "684",
        "parid": "35",
        "regname": "台湾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "685",
        "parid": "35",
        "regname": "台北市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "686",
        "parid": "35",
        "regname": "新北市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "687",
        "parid": "35",
        "regname": "基隆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "688",
        "parid": "35",
        "regname": "新竹市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "689",
        "parid": "35",
        "regname": "嘉义市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "690",
        "parid": "35",
        "regname": "桃园市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "691",
        "parid": "35",
        "regname": "台中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "692",
        "parid": "35",
        "regname": "台南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "693",
        "parid": "35",
        "regname": "高雄市",
        "regtype": "2",
        "ageid": "0"
      }
    ],
    chenkShi: true, //未选择市时显示请选择字段
    showShi: false, //城市合伙人显示
    shengMing: '',
    shiMing: '',
  },
  // 选择性别
  radioChange1: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
    // 显示自定义出生年与日时间
    showDatePicker: function (e) {
      this.setData({
        datePickerIsShow: true,
      });
    },
    // 确定选择的时间
    datePickerOnSureClick: function (e) {
      let myDate = new Date()
      let year = myDate.getFullYear()
      if (e.detail.value[0] >= year) {
        wx.showToast({
          title: '出生年不能大于当前年',
          icon: 'none',
          duration: 1500
        })
      } else {
        let num1 = Number(e.detail.value[1])
        let num2 = Number(e.detail.value[2])
        this.setData({
          date: `${e.detail.value[0]}年${e.detail.value[1]}月${e.detail.value[2]}日`,
          datePickerValue: e.detail.value,
          datePickerIsShow: false,
          birth_time: e.detail.value[0] + '-' + num1 + '-' + num2
        });
        wx.setStorageSync('birth_time', this.data.birth_time)
      }
    },
    // 取消时间的按钮
    datePickerOnCancelClick: function (event) {
      this.setData({
        datePickerIsShow: false,
      });
    },
  // 点击申请身份选择
  showCheck: function (e) {
    this.setData({
      showCheck: this.data.showCheck ? false : true,
    })
  },
  // 选择户籍所在地
  bindRegionChange1: function (e) {
    if (e.detail.value[0] == e.detail.value[1]) {
      this.setData({
        region1: e.detail.value[0],
        region2: e.detail.value[2],
      })
    } else {
      this.setData({
        region1: e.detail.value[0],
        region2: e.detail.value[1],
        region3: e.detail.value[2],
      })
    }
    this.setData({
      census_address: e.detail.value,
    })
  },
  /*点击变色*/
  click: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id
    })
  },
  // 选择合伙人
  radioChange: function (e) {
    switch (e.detail.value) {
      case '城市合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '1',
          showShi: true,
        })
        break;
      case '县级合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '2',
          showShi: false,
        })
        break;
      case '乡镇合伙人':
        this.setData({
          value: e.detail.value,
          name1: e.detail.value,
          bossShenfen: '3',
          showShi: false,
        })
        break;
    }
    this.setData({
      value: e.detail.value,
      name1: e.detail.value
    })
  },
  // 显示合伙人框
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  // 确定选择合伙人
  sureCheck: function (e) {
    this.setData({
      name: this.data.name1,
      showDialog: !this.data.showDialog,
    })
    if (this.data.name == '县级合伙人') {
      this.setData({
        showHehuo: true,
        hehuoren: '乡镇合伙人',
        idType: '2',
        showXiang: false,
        bossId: '2',
        bossIdName: '城市合伙人',
        bossShenfen: '2'
      })
    } else if (this.data.name == '乡镇合伙人') {
      this.setData({
        showHehuo: true,
        hehuoren: '城市合伙人',
        idType: '3',
        showXiang: true,
        bossId: '3',
        bossIdName: '县级合伙人',
        bossShenfen: '3'
      })
    } else {
      this.setData({
        showHehuo: false,
        showXiang: false,
        bossId: '',
        idType: '1',
        bossShenfen: ''
      })
    }
    if (this.data.enter_sheng !== '请选择' || '') {
      let data = {
        Authorization: wx.getStorageSync('token'),
        shenfen: this.data.bossShenfen,
        enter_sheng: this.data.enter_sheng,
        enter_shi: this.data.enter_shi,
        enter_xian: this.data.enter_xian,
      }
      api.getBossId(data).then(res => {
        if (res.data.code == 200) {
          if (res.data.data.length == 0) {
            this.setData({
              bossMingzi: '管理员',
              bossIdName: '',
              showBossName: false,
              showBossMing: true,
            })
          } else {
            switch (res.data.data.shenfen) {
              case '1':
                this.setData({
                  bassId: '城市合伙人'
                })
                break;
              case '2':
                this.setData({
                  bassId: '县级合伙人'
                })
                break;
              case '3':
                this.setData({
                  bassId: '乡镇合伙人'
                })
                break;
            }
            if (res.data.data[0].id) {
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossName: true,
                showBossMing: true,
                boss_id: res.data.data[0].id
              })
            } else {
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossMing: true,
                showBossName: false,
                boss_id: ''
              })
              this.setData({
                shangjiId: res.data.data[0].id
              })
            }
          }
        } else {
          console.log(res.data.msg)
        }
      })
    } else {
      console.log('无')
    }
  },
  // 取消选择合伙人
  cancelCheck: function () {
    var that = this
    if (that.data.name != '') {
      that.setData({
        name: that.data.name
      })
    }
    that.setData({
      showDialog: !this.data.showDialog,
      value: 'show',
      checked: false,
    })
  },
  // 市选择

  bindMultiPickerChange: function (e) {
    let one = e.detail.value[0]
    let two = e.detail.value[1]
    let that = this
    that.setData({
      "multiIndex[0]": e.detail.value[0],
      "multiIndex[1]": e.detail.value[1],
      shengMing: that.data.multiArray[0][one],
      shiMing: that.data.multiArray[1][two],
      chenkShi: false
    })
  },
  bindMultiPickerColumnChange: function (e) {
    let that = this
    switch (e.detail.column) {
      case 0:
        list = []
        for (var i = 0; i < that.data.objectMultiArray.length; i++) {
          if (that.data.objectMultiArray[i].parid == that.data.objectMultiArray[e.detail.value].regid) {
            list.push(that.data.objectMultiArray[i].regname)
          }
        }
        that.setData({
          "multiArray[1]": list,
          "multiIndex[0]": e.detail.value,
          "multiIndex[1]": 0
          // chenkShi: false
        })
    }
  },
  // 选择城市
  bindRegionChange: function (e) {
    let that = this
    if (e.detail.value[0] == e.detail.value[1]) {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: '',
        enter_shi: e.detail.value[1],
        enter_xian: e.detail.value[2],
      })
    } else {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: e.detail.value[1],
        enter_shi: e.detail.value[1],
        enter_xian: e.detail.value[2],
      })
    }
    if (that.data.enter_sheng) {
      let data = {
        Authorization: wx.getStorageSync('token'),
        shenfen: that.data.idType,
        enter_sheng: that.data.enter_sheng,
        enter_shi: that.data.enter_shi,
        enter_xian: that.data.enter_xian,
      }
      api.getBossId(data).then(res => {
        if (res.data.code == 200) {
          if (JSON.stringify(res.data.data) === '[]') {
            that.setData({
              bossMingzi: '管理员',
              bossIdName: '',
              showBossName: false,
              showBossMing: true,
            })
          } else {
            switch (res.data.data.shenfen) {
              case '1':
                that.setData({
                  bassId: '城市合伙人'
                })
                break;
              case '2':
                that.setData({
                  bassId: '县级合伙人'
                })
                break;
              case '3':
                that.setData({
                  bassId: '乡镇合伙人'
                })
                break;
            }
            if (res.data.data[0].id) {
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossName: true,
                showBossMing: true,
                boss_id: res.data.data[0].id
              })
            } else {
              that.setData({
                bossMingzi: res.data.data[0].name,
                showBossMing: true,
                showBossName: false,
                boss_id: ''
              })
            }
            this.setData({
              shangjiId: res.data.data[0].id
            })
          }
        } else {
          console.log(res.data.msg)
        }
      })
    } else {
      console.log('无')
    }
  },
  // 申请区域乡镇
  blurChange1: function (e) {
    this.setData({
      enter_xiang: e.detail.value
    })
  },
  // 申请区域详细地址
  bindTextAreaBlur: function (e) {
    this.setData({
      enter_address_details: e.detail.value
    })
  },
  // 申请姓名
  blurChange2: function (e) {
    this.setData({
      mingzi: e.detail.value
    })
  },
  // 身份证
  blurChange3: function (e) {
    this.setData({
      id_num: e.detail.value
    })
  },
  // 电话
  blurChange4: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 户籍区域详细地址
  bindTextAreaBlur1: function (e) {
    this.setData({
      census_address_details: e.detail.value
    })
  },
  // 提交全部资料
  tijiaoInfo: function (e) {
    let that = this
    if (that.data.idType == '1') {
      that.setData({
        enter_sheng: that.data.shengMing,
        enter_shi: that.data.shiMing
      })
    } else {
      that.setData({
        enter_sheng: that.data.enter_sheng,
        enter_shi: that.data.enter_shi
      })
    }
    let data = {
      shenfen: that.data.idType,
      enter_sheng: that.data.enter_sheng,
      enter_shi: that.data.enter_shi,
      enter_xian: that.data.enter_xian,
      enter_xiang: that.data.enter_xiang,
      enter_address_details: that.data.enter_address_details,
      boss_id: that.data.shangjiId,
      name: that.data.mingzi,
      sex: that.data.sex,
      birth_time: that.data.birth_time,
      id_num: that.data.id_num,
      phone: that.data.phone,
      census_address: that.data.census_address,
      census_address_details: that.data.census_address_details,
      Authorization: wx.getStorageSync('token')
    }
    api.create(data).then(res => {
      if (res.data.code == 200) {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
        wx.navigateTo({
          url: '../success/success'
        })
      } else {
        wx.showToast({
          title: res.data.msg,
          icon: 'none',
          duration: 1500
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})