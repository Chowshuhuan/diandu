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
      ['北京市', '安徽省', "福建省", "甘肃省", "广东省", "广西壮族自治区", "贵州省", "海南省", "河北省", "河南省", "黑龙江省", "湖北省", "湖南省", "吉林省", "江苏省", "江西省", "辽宁省", "内蒙古自治区", "宁夏回族自治区", "青海省", "山东省", "山西省", "陕西省", "上海市", "四川省", "天津市", "西藏自治区", "新疆维吾尔自治区", "云南省", "浙江省", "重庆市", "香港特别行政区", "澳门特别行政区", "台湾省"],
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
        "regname": "广西壮族自治区",
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
        "regname": "新疆维吾尔族自治区",
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
        "regname": "香港特别行政区",
        "regtype": "1",
        "ageid": "0"
      }, {
        "regid": "34",
        "parid": "1",
        "regname": "澳门特别行政区",
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
      }, {
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
      },
      {
        "regid": "41",
        "parid": "3",
        "regname": "淮北市",
        "regtype": "2",
        "ageid": "0"
      },
      {
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
        "parid": "2",
        "regname": "北京市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "53",
        "parid": "4",
        "regname": "福州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "54",
        "parid": "4",
        "regname": "厦门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "55",
        "parid": "4",
        "regname": "莆田市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "56",
        "parid": "4",
        "regname": "三明市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "57",
        "parid": "4",
        "regname": "泉州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "58",
        "parid": "4",
        "regname": "漳州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "59",
        "parid": "4",
        "regname": "南平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "60",
        "parid": "4",
        "regname": "龙岩市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "61",
        "parid": "4",
        "regname": "宁德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "62",
        "parid": "5",
        "regname": "兰州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "63",
        "parid": "5",
        "regname": "嘉峪关市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "64",
        "parid": "5",
        "regname": "金昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "65",
        "parid": "5",
        "regname": "白银市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "66",
        "parid": "5",
        "regname": "天水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "67",
        "parid": "5",
        "regname": "武威市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "68",
        "parid": "5",
        "regname": "张掖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "69",
        "parid": "5",
        "regname": "平凉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "70",
        "parid": "5",
        "regname": "酒泉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "71",
        "parid": "5",
        "regname": "庆阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "72",
        "parid": "5",
        "regname": "定西市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "73",
        "parid": "5",
        "regname": "陇南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "74",
        "parid": "5",
        "regname": "临夏回族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "75",
        "parid": "5",
        "regname": "甘南藏族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "76",
        "parid": "6",
        "regname": "广州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "77",
        "parid": "6",
        "regname": "深圳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "78",
        "parid": "6",
        "regname": "韶关市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "79",
        "parid": "6",
        "regname": "珠海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "80",
        "parid": "6",
        "regname": "佛山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "81",
        "parid": "6",
        "regname": "汕头市",
        "regtype": "3",
        "ageid": "0"
      }, {
        "regid": "82",
        "parid": "6",
        "regname": "湛江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "83",
        "parid": "6",
        "regname": "江门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "84",
        "parid": "6",
        "regname": "肇庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "85",
        "parid": "6",
        "regname": "茂名市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "86",
        "parid": "6",
        "regname": "梅州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "87",
        "parid": "6",
        "regname": "惠州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "88",
        "parid": "6",
        "regname": "汕尾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "89",
        "parid": "6",
        "regname": "河源市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "90",
        "parid": "6",
        "regname": "阳江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "91",
        "parid": "6",
        "regname": "清远市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "92",
        "parid": "6",
        "regname": "东莞市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "93",
        "parid": "6",
        "regname": "中山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "94",
        "parid": "6",
        "regname": "揭阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "95",
        "parid": "6",
        "regname": "云浮市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "96",
        "parid": "6",
        "regname": "潮州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "97",
        "parid": "7",
        "regname": "南宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "98",
        "parid": "7",
        "regname": "桂林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "99",
        "parid": "7",
        "regname": "崇左市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "100",
        "parid": "7",
        "regname": "柳州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "101",
        "parid": "7",
        "regname": "来宾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "102",
        "parid": "7",
        "regname": "防城港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "103",
        "parid": "7",
        "regname": "梧州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "104",
        "parid": "7",
        "regname": "贺州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "105",
        "parid": "7",
        "regname": "玉林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "106",
        "parid": "7",
        "regname": "贵港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "107",
        "parid": "7",
        "regname": "白色市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "108",
        "parid": "7",
        "regname": "钦州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "109",
        "parid": "7",
        "regname": "河池市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "110",
        "parid": "7",
        "regname": "北海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "111",
        "parid": "8",
        "regname": "贵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "112",
        "parid": "8",
        "regname": "安顺市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "113",
        "parid": "8",
        "regname": "毕节市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "114",
        "parid": "8",
        "regname": "六盘水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "115",
        "parid": "8",
        "regname": "黔西南布依族苗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "116",
        "parid": "8",
        "regname": "黔东南苗族侗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "117",
        "parid": "8",
        "regname": "黔南布依族苗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "118",
        "parid": "8",
        "regname": "铜仁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "119",
        "parid": "8",
        "regname": "遵义市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "120",
        "parid": "9",
        "regname": "海口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "121",
        "parid": "9",
        "regname": "三亚市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "122",
        "parid": "9",
        "regname": "三沙市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "123",
        "parid": "9",
        "regname": "儋州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "124",
        "parid": "9",
        "regname": "省直辖县级行政区划",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "125",
        "parid": "10",
        "regname": "石家庄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "126",
        "parid": "10",
        "regname": "保定市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "127",
        "parid": "10",
        "regname": "唐山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "128",
        "parid": "10",
        "regname": "秦皇岛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "129",
        "parid": "10",
        "regname": "邯郸市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "130",
        "parid": "10",
        "regname": "邢台市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "131",
        "parid": "10",
        "regname": "张家口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "132",
        "parid": "10",
        "regname": "承德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "133",
        "parid": "10",
        "regname": "沧州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "134",
        "parid": "10",
        "regname": "廊坊市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "135",
        "parid": "10",
        "regname": "衡水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "136",
        "parid": "11",
        "regname": "郑州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "137",
        "parid": "11",
        "regname": "洛阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "138",
        "parid": "11",
        "regname": "开封市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "139",
        "parid": "11",
        "regname": "安阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "140",
        "parid": "11",
        "regname": "鹤壁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "141",
        "parid": "11",
        "regname": "平顶山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "142",
        "parid": "11",
        "regname": "焦作市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "143",
        "parid": "11",
        "regname": "新乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "144",
        "parid": "11",
        "regname": "濮阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "145",
        "parid": "11",
        "regname": "许昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "146",
        "parid": "11",
        "regname": "漯河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "147",
        "parid": "11",
        "regname": "三门峡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "148",
        "parid": "11",
        "regname": "南阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "149",
        "parid": "11",
        "regname": "商丘市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "150",
        "parid": "11",
        "regname": "信阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "151",
        "parid": "11",
        "regname": "周口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "152",
        "parid": "11",
        "regname": "驻马店市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "153",
        "parid": "11",
        "regname": "省直辖县级行政区划",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "154",
        "parid": "12",
        "regname": "哈尔滨市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "155",
        "parid": "12",
        "regname": "齐齐哈尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "156",
        "parid": "12",
        "regname": "鸡西市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "157",
        "parid": "12",
        "regname": "鹤岗市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "158",
        "parid": "12",
        "regname": "双鸭山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "159",
        "parid": "12",
        "regname": "大庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "160",
        "parid": "12",
        "regname": "佳木斯市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "161",
        "parid": "12",
        "regname": "宜春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "162",
        "parid": "12",
        "regname": "七台河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "163",
        "parid": "12",
        "regname": "牡丹江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "164",
        "parid": "12",
        "regname": "黑河市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "165",
        "parid": "12",
        "regname": "绥化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "166",
        "parid": "12",
        "regname": "大兴安岭地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "167",
        "parid": "13",
        "regname": "武汉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "168",
        "parid": "13",
        "regname": "黄石市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "169",
        "parid": "13",
        "regname": "十堰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "170",
        "parid": "13",
        "regname": "宜昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "171",
        "parid": "13",
        "regname": "襄阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "172",
        "parid": "13",
        "regname": "鄂州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "173",
        "parid": "13",
        "regname": "荆门市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "174",
        "parid": "13",
        "regname": "孝感市",
        "regtype": "2",
        "ageid": "0"
      },
      {
        "regid": "175",
        "parid": "13",
        "regname": "荆州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "176",
        "parid": "13",
        "regname": "黄冈市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "177",
        "parid": "13",
        "regname": "随州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "178",
        "parid": "13",
        "regname": "咸宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "179",
        "parid": "13",
        "regname": "恩施土家族苗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "180",
        "parid": "13",
        "regname": "省直辖县级行政区划",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "181",
        "parid": "14",
        "regname": "长沙市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "182",
        "parid": "14",
        "regname": "株州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "183",
        "parid": "14",
        "regname": "湘潭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "184",
        "parid": "14",
        "regname": "衡阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "185",
        "parid": "14",
        "regname": "邵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "186",
        "parid": "14",
        "regname": "岳阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "187",
        "parid": "14",
        "regname": "常德市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "188",
        "parid": "14",
        "regname": "张家界市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "189",
        "parid": "14",
        "regname": "益阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "190",
        "parid": "14",
        "regname": "郴州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "191",
        "parid": "14",
        "regname": "永州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "192",
        "parid": "14",
        "regname": "怀化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "193",
        "parid": "14",
        "regname": "娄底市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "194",
        "parid": "14",
        "regname": "湘西土家族苗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "195",
        "parid": "15",
        "regname": "长春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "196",
        "parid": "15",
        "regname": "吉林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "197",
        "parid": "15",
        "regname": "白城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "198",
        "parid": "15",
        "regname": "四平市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "199",
        "parid": "15",
        "regname": "辽源市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "200",
        "parid": "15",
        "regname": "通化市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "201",
        "parid": "15",
        "regname": "白山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "202",
        "parid": "15",
        "regname": "松原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "203",
        "parid": "15",
        "regname": "延边朝鲜族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "204",
        "parid": "16",
        "regname": "南京市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "205",
        "parid": "16",
        "regname": "苏州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "206",
        "parid": "16",
        "regname": "无锡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "207",
        "parid": "16",
        "regname": "常州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "208",
        "parid": "16",
        "regname": "徐州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "209",
        "parid": "16",
        "regname": "连云港市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "210",
        "parid": "16",
        "regname": "南通市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "211",
        "parid": "16",
        "regname": "淮安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "212",
        "parid": "16",
        "regname": "盐城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "213",
        "parid": "16",
        "regname": "扬州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "214",
        "parid": "16",
        "regname": "镇江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "215",
        "parid": "16",
        "regname": "泰州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "216",
        "parid": "16",
        "regname": "宿迁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "217",
        "parid": "17",
        "regname": "南昌市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "218",
        "parid": "17",
        "regname": "景德镇",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "219",
        "parid": "17",
        "regname": "萍乡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "220",
        "parid": "17",
        "regname": "九江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "221",
        "parid": "17",
        "regname": "新余市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "222",
        "parid": "17",
        "regname": "鹰潭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "223",
        "parid": "17",
        "regname": "赣州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "224",
        "parid": "17",
        "regname": "上饶市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "225",
        "parid": "17",
        "regname": "吉安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "226",
        "parid": "17",
        "regname": "宜春市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "227",
        "parid": "17",
        "regname": "抚州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "228",
        "parid": "18",
        "regname": "沈阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "229",
        "parid": "18",
        "regname": "大连市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "230",
        "parid": "18",
        "regname": "鞍山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "231",
        "parid": "18",
        "regname": "本溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "232",
        "parid": "18",
        "regname": "抚顺市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "233",
        "parid": "18",
        "regname": "丹东市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "234",
        "parid": "18",
        "regname": "锦州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "235",
        "parid": "18",
        "regname": "营口市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "236",
        "parid": "18",
        "regname": "阜新市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "237",
        "parid": "18",
        "regname": "辽阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "238",
        "parid": "18",
        "regname": "铁岭市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "239",
        "parid": "18",
        "regname": "盘锦市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "240",
        "parid": "18",
        "regname": "朝阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "241",
        "parid": "18",
        "regname": "葫芦岛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "242",
        "parid": "19",
        "regname": "呼和浩特市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "243",
        "parid": "19",
        "regname": "包头市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "244",
        "parid": "19",
        "regname": "乌海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "245",
        "parid": "19",
        "regname": "赤峰市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "246",
        "parid": "19",
        "regname": "通辽市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "247",
        "parid": "19",
        "regname": "鄂尔多斯市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "248",
        "parid": "19",
        "regname": "呼伦贝尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "249",
        "parid": "19",
        "regname": "巴彦淖尔市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "250",
        "parid": "19",
        "regname": "乌兰察布市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "251",
        "parid": "19",
        "regname": "兴安盟",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "252",
        "parid": "19",
        "regname": "锡林郭勒盟",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "253",
        "parid": "19",
        "regname": "阿拉善盟",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "254",
        "parid": "20",
        "regname": "银川市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "255",
        "parid": "20",
        "regname": "固原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "256",
        "parid": "20",
        "regname": "石嘴山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "257",
        "parid": "20",
        "regname": "吴忠市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "258",
        "parid": "20",
        "regname": "中卫市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "259",
        "parid": "22",
        "regname": "济南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "260",
        "parid": "22",
        "regname": "青岛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "261",
        "parid": "22",
        "regname": "淄博市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "262",
        "parid": "22",
        "regname": "枣庄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "263",
        "parid": "22",
        "regname": "东营市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "264",
        "parid": "22",
        "regname": "烟台市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "265",
        "parid": "22",
        "regname": "潍坊市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "266",
        "parid": "22",
        "regname": "济宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "267",
        "parid": "22",
        "regname": "泰安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "268",
        "parid": "22",
        "regname": "威海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "269",
        "parid": "22",
        "regname": "日照市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "270",
        "parid": "22",
        "regname": "临沂市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "271",
        "parid": "22",
        "regname": "德州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "272",
        "parid": "22",
        "regname": "聊城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "273",
        "parid": "22",
        "regname": "滨州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "274",
        "parid": "22",
        "regname": "菏泽市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "275",
        "parid": "23",
        "regname": "太原市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "276",
        "parid": "23",
        "regname": "长治市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "277",
        "parid": "23",
        "regname": "大同市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "278",
        "parid": "23",
        "regname": "晋城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "279",
        "parid": "23",
        "regname": "晋中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "280",
        "parid": "23",
        "regname": "临汾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "280",
        "parid": "23",
        "regname": "吕梁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "281",
        "parid": "23",
        "regname": "朔州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "282",
        "parid": "23",
        "regname": "忻州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "283",
        "parid": "23",
        "regname": "阳泉市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "284",
        "parid": "23",
        "regname": "运城市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "285",
        "parid": "24",
        "regname": "西安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "286",
        "parid": "24",
        "regname": "铜川市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "287",
        "parid": "24",
        "regname": "宝鸡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "288",
        "parid": "24",
        "regname": "咸阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "289",
        "parid": "24",
        "regname": "渭南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "290",
        "parid": "24",
        "regname": "延安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "291",
        "parid": "24",
        "regname": "汉中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "292",
        "parid": "24",
        "regname": "榆林市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "293",
        "parid": "24",
        "regname": "安康市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "294",
        "parid": "24",
        "regname": "商洛市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "295",
        "parid": "25",
        "regname": "上海市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "296",
        "parid": "26",
        "regname": "成都市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "297",
        "parid": "26",
        "regname": "自贡市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "298",
        "parid": "26",
        "regname": "攀枝花市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "299",
        "parid": "26",
        "regname": "泸州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "300",
        "parid": "26",
        "regname": "德阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "301",
        "parid": "26",
        "regname": "绵阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "302",
        "parid": "26",
        "regname": "广元市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "303",
        "parid": "26",
        "regname": "遂宁市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "304",
        "parid": "26",
        "regname": "内江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "305",
        "parid": "26",
        "regname": "乐山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "306",
        "parid": "26",
        "regname": "南充市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "307",
        "parid": "26",
        "regname": "眉山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "308",
        "parid": "26",
        "regname": "宜宾市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "309",
        "parid": "26",
        "regname": "广安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "310",
        "parid": "26",
        "regname": "达州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "311",
        "parid": "26",
        "regname": "雅安市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "312",
        "parid": "26",
        "regname": "巴中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "313",
        "parid": "26",
        "regname": "资阳市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "314",
        "parid": "26",
        "regname": "阿坝藏族羌族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "315",
        "parid": "26",
        "regname": "甘孜藏族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "316",
        "parid": "26",
        "regname": "凉山彝族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "317",
        "parid": "27",
        "regname": "天津市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "318",
        "parid": "28",
        "regname": "拉萨市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "319",
        "parid": "28",
        "regname": "日喀则市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "320",
        "parid": "28",
        "regname": "昌都市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "321",
        "parid": "28",
        "regname": "林芝市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "322",
        "parid": "28",
        "regname": "那曲市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "323",
        "parid": "28",
        "regname": "山南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "324",
        "parid": "28",
        "regname": "阿里地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "325",
        "parid": "29",
        "regname": "乌鲁木齐市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "326",
        "parid": "29",
        "regname": "克拉玛依市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "327",
        "parid": "29",
        "regname": "吐鲁番市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "328",
        "parid": "29",
        "regname": "哈密市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "329",
        "parid": "29",
        "regname": "昌吉回族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "330",
        "parid": "29",
        "regname": "博尔塔拉蒙古自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "331",
        "parid": "29",
        "regname": "巴音郭楞蒙古自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "332",
        "parid": "29",
        "regname": "阿克苏地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "333",
        "parid": "29",
        "regname": "克孜勒苏柯尔克孜自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "334",
        "parid": "29",
        "regname": "喀什地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "335",
        "parid": "29",
        "regname": "和田地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "336",
        "parid": "29",
        "regname": "伊犁哈萨克自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "337",
        "parid": "29",
        "regname": "塔城地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "338",
        "parid": "29",
        "regname": "阿勒泰地区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "339",
        "parid": "29",
        "regname": "自治区直辖县级行政区划",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "340",
        "parid": "30",
        "regname": "昆明市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "341",
        "parid": "30",
        "regname": "曲靖市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "342",
        "parid": "30",
        "regname": "玉溪市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "343",
        "parid": "30",
        "regname": "保山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "344",
        "parid": "30",
        "regname": "昭通市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "345",
        "parid": "30",
        "regname": "丽江市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "346",
        "parid": "30",
        "regname": "普洱市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "347",
        "parid": "30",
        "regname": "临沧市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "348",
        "parid": "30",
        "regname": "楚雄彝族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "349",
        "parid": "30",
        "regname": "红河哈尼族彝族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "350",
        "parid": "30",
        "regname": "文山壮族苗族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "351",
        "parid": "30",
        "regname": "西双版纳傣族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "352",
        "parid": "30",
        "regname": "大理白族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "353",
        "parid": "30",
        "regname": "德宏傣族景颇族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "354",
        "parid": "30",
        "regname": "怒江傈僳族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "355",
        "parid": "30",
        "regname": "迪庆藏族自治州",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "356",
        "parid": "31",
        "regname": "杭州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "357",
        "parid": "31",
        "regname": "宁波市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "358",
        "parid": "31",
        "regname": "温州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "359",
        "parid": "31",
        "regname": "嘉兴市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "360",
        "parid": "31",
        "regname": "湖州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "361",
        "parid": "31",
        "regname": "绍兴市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "362",
        "parid": "31",
        "regname": "金华市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "363",
        "parid": "31",
        "regname": "衢州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "364",
        "parid": "31",
        "regname": "舟山市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "365",
        "parid": "31",
        "regname": "台州市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "366",
        "parid": "31",
        "regname": "丽水市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "367",
        "parid": "32",
        "regname": "重庆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "368",
        "parid": "33",
        "regname": "香港特别行政区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "369",
        "parid": "34",
        "regname": "澳门特别行政区",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "370",
        "parid": "35",
        "regname": "台北市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "371",
        "parid": "35",
        "regname": "高雄市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "372",
        "parid": "35",
        "regname": "台南市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "373",
        "parid": "35",
        "regname": "台中市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "374",
        "parid": "35",
        "regname": "南投县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "375",
        "parid": "35",
        "regname": "基隆市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "376",
        "parid": "35",
        "regname": "新竹市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "377",
        "parid": "35",
        "regname": "嘉义市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "378",
        "parid": "35",
        "regname": "新北市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "379",
        "parid": "35",
        "regname": "宜兰县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "380",
        "parid": "35",
        "regname": "新竹县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "381",
        "parid": "35",
        "regname": "桃园市",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "382",
        "parid": "35",
        "regname": "苗栗县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "383",
        "parid": "35",
        "regname": "彰化县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "384",
        "parid": "35",
        "regname": "嘉义县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "385",
        "parid": "35",
        "regname": "云林县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "386",
        "parid": "35",
        "regname": "屏东县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "387",
        "parid": "35",
        "regname": "台东县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "388",
        "parid": "35",
        "regname": "花莲县",
        "regtype": "2",
        "ageid": "0"
      }, {
        "regid": "389",
        "parid": "35",
        "regname": "澎湖县",
        "regtype": "2",
        "ageid": "0"
      }
    ],
    chenkShi: true, //未选择市时显示请选择字段
    showShi: false, //城市合伙人显示
    shengMing: '',
    shiMing: '',
    disabled: false
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
      disabled: false
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
      console.log(this.data.enter_sheng,this.data.enter_shi,this.data.enter_xian)
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
              this.setData({
                bossMingzi: res.data.data[0].name,
                showBossName: true,
                showBossMing: true,
                boss_id: res.data.data[0].id
              })
            } else {
              this.setData({
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
        } else if (res.data.code == 400) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500
          })
          this.setData({
            bossMingzi: '无',
            showBossMing: true
          })
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
    console.log(e.detail.value)
    if (e.detail.value[0] == e.detail.value[1]) {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: '',
        enter_shi: e.detail.value[1],
        enter_xian: e.detail.value[2],
      })
      // && e.detail.value[0] == '重庆市'
    } else if (e.detail.value[1] == '县' ) {
      that.setData({
        enter_sheng: e.detail.value[0],
        shi: '',
        enter_shi: e.detail.value[0],
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
      console.log(data)
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
        } else if (res.data.code == 400) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500
          })
          this.setData({
            bossMingzi: '无',
            showBossMing: true
          })
        } else {
          console.log(res.data.msg)
          wx.showToast({
            title: res.data.msg,
            icon: 'none',
            duration: 1500
          })
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
    console.log(that.data.enter_sheng,that.data.enter_shi,that.data.enter_xian)
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