◆Office技巧汇总
  查找替换时 *代表任意数量的任意字符
◆快捷操作、小技巧
  单元格的光标拖拽操作
      光标拖拽可进行复制、数字的递增操作或使其他单元格具有和所拖拽单元格相同的格式形式的操作（如公式单元格的拖拽）
      拖拽方法：光标直接拖拽/Ctrl+光标拖拽（两种产生的效果效果不同，如数字的递增或数字复制操作可选用不同的拖拽方法达到）
      其他拖拽技巧：单个单元格选中拖拽、多个单元格被选中拖拽。（注：两种拖拽技巧有时也会产生不同的效果）
      
  格式复制
      双击命令则可进行多次的复制操作。
      
  快速增加行
      先增加一行，再按F4（重复前面命令）进行快速增加行。
      
  文字后的下划线不显示
      Shift+_(大键盘的)

  Excel插入其他文件如PDF作为参考的原始文件。
      插入-物件-建立新物件中的Package选项，选择进行插入。

  EXCEL中如何引用一个单元格内的部分文字内容
      1、如果引用的内容是单元格两端的部分内容，可以用LEFT和RIGHT函数，如，=LEFT(A1,5)取单元格左边5个字符的内容；=RIGHT(A1,7)取单元格右边7个字符的内容。
      2、如果引用的内容是单元格中间部分内容，可以用MID函数，如，=MID(A1,3,4) 取单元格A1中从第3位开始的4个字符。
      3、如果只告诉拟引用的第一个字符，可先用FIND,FINDB,SEARCH,SEARCHB等函数定位起始位置，再用MID函数提取引用。

  引用其他单元格的内容后在加上其他的文字
      =引用的单元格&"其他的文字"（注意双引号为英文的）

  圆圈数字的输入方法
      1~50，方法如下： 
          1．菜单栏：插入——符号 
          2．字体下拉列表中选择“MS Gothic”(MS Mingho；MS Pgothic；MS PMincho亦可)； 
          3．子集列表中选择“带括号的字母数字” 
          4．11~20的带圈字就出现在你眼前，插入就行了（向下翻页可查看至50） 
      如果你想输入50以上的带圈字，建议你先在WORD中通过“格式——中文版式——带圈字符”输入，复制后，在EXCEL中“选择性粘贴”选择“WORD文档对象”或“图片”即可（注：不要点进网格内，否则无“选择性粘贴”选项）,虽然不太完美……

  怎样同时打开几个并列Excel窗口
      同时打开几个Excel程序（不是通过直接点击文档去打开Excel，而是直接去打开程序比如双击Excel的快捷方式、右键锁定在任务栏上的图标去打开等），在每个程序中分别打开所需的文档。
      
  修改Excel的默认字体
      （Excel默认模板设置，可以手动创建？）文件-选项-常规中进行字体的选择。
      
  冻结单元格
      鼠标选中一单元格，点击冻结命令，则冻结该单元格上边与左边的所有单元格。
      
  一次性对多个单元格进行内容输入
      输入后按Ctrl+Enter即可。
      
  Excel单元格中实现换行
      Alt+Enter来实现。
  
  快速輸入時間
    日期：Ctrl+；（英文狀態下的分號）
    時間：Ctrl+Shift+；
        
  加密Excel
    文件->信息->权限->用密码进行加密
----------------------------------------------------------------------------
◆软件特性、系统相关
    Excel系统默认模版设置（系统无默认模版？）

    修改Excel的默认字体
        （Excel默认模板设置，可以手动创建？）文件-选项-常规中进行字体的选择。
    打印区域设置
        选择区域-版面设置-打印范围-设定打印范围
        产生效果：打印时只会打印出设定的范围内容，其他区域为空白。
    
    默认网格去掉了恢复方法——将填充改为无。
    当另存为文件后，后续的编辑则是储存在另存为的文档上的。
----------------------------------------------------------------------------
★★★Excel公式
    数据计算与统计
        Excel 公式的应用 
            格式需要在前面加一个=，插入某个行列格则直接去选然后点击Enter确认。
            注：复制或下拉拖动操作含有公式的单元格，则后续的单元格有相同的格式
        幂公式
            =Power（底数，幂）
        
        求和
            =SUM（N1，N2，...，Nn）或者SUM（Nx：Ny）及两者混合使用。
            
        求平均值
            =AVERAGE（）用法同上。
            
        最大/小值
            =MAX/MIN（）用法同上。
            
        求幂公式
            =LOG（值，基数）
            
        正弦公式
            =SIN（N1*PI（）/180）
            （注：PI()即π；N1*PI（）/180即为转换成的弧度值)
            反正弦
                =ASIN（N1）
                （注：得到的值为弧度值，得到的值/PI（）*180转换成角度值）
                （注：其他三角函数用法类似）
            
        取余数
            =MOD（，）
                eg：
                =MOD(ROW(),χ)=0
                说明：可在设定格式中使用（如填充行颜色），可使使该等式成立的对象设定格式。
                解释：MOD——ROW()对χ取余的值；ROW（）——行数；COLUMN()——列数。
                
        四舍五入
            =ROUND(X,Y)
            X为单元格，取Y个小数
            
        取绝对值
            =ABS(number) 
            主要功能：求出相应数字的绝对值。
            
        数值取整
            =INT(NUMBER) 
            用途：将任意实数向下取整为最接近的整数。
            
        取中值
            =MEDIAN(NUMBER1，NUMBER2，...) 
            用途：返回给定数值集合的中位数(它是在一组数据中居于中间的数。换句话说，在这组数据中，有一半的数据比它大，有一半的数据比它小)。
            实例：MEDIAN(11，12，13，14，15)返回13；MEDIAN(1，2，3，4，5，6)返回3.5，即3与4的平均值。
            
        计数
            =COUNT（）
            统计数组或单元格区域中含有数字的单元格个数。
            
        随机数0-1
            RAND()
            
    逻辑、判断公式
        与
            =AND（logical1,logical2,...）
            其中Logical1, logical2为判断条件，只有所有条件满足，结果才返回真。
            
         或
            =OR(logical1,logical2,...)
            其中Logical1, logical2为判断条件，只要有一个条件满足，结果就返回真。
            
        判定公式
            IF（判定条件，（成立时的）执行，（不成立时的）执行）
            eg:=if（A1>2，“3”，“4”），即A1>2,则为3，否则为4。
            
        判断求和
            =SUMIF(range，criteria，sum_range)
            参数：Range为用于条件判断的单元格区域，Criteria是由数字、逻辑表达式等组成的判定条件，Sum_range为需要求和的单元格、区域或引用。
            实例：某单位统计工资报表中职称为“中级”的员工工资总额。假设工资总额存放在工作表的F列，员工职称存放在工作表B列。则公式为“=SUMIF(B1:B1000，"中级"，F1:F1000)”，其中“B1:B1000”为提供逻辑判断依据的单元格区域，"中级"为判断条件，就是仅仅统计B1:B1000区域中职称为“中级”的单元格，F1:F1000为实际求和的单元格区域
            
        =LARGE(ARRAY，K) 
            参数：ARRAY为需要从中查询第K个最大值的数组或数据区域，K为返回值在数组或数据单元格区域里的位置(即名次)。
            实例：如果B1=59、B2=70、B3=80、B4=90、B5=89、B6=84、B7=92，，则公式“=LARGE(B1：B7，2)”返回90。 

        测试奇偶性
            =ISEVEN(NUMBER) 
            用途：测试参数的奇偶性，如果参数为偶数返回TRUE，否则返回FALSE。 
            注：NUMBER待测试的数值。如果参数值不是整数，则自动截去小数部分取整。如果参数NUMBER不是数值，ISEVEN函数返回错误值#VALUE!。　　
             　
        判断计数函数
            =COUNTIF(RANGE，CRITERIA) 
            用途：统计某一区域中符合条件的单元格数目。
            注：其中数字可以直接写入，表达式和文本必须加引号。 
            实例：假设A1:A5区域内存放的文本分别为女、男、女、男、女，则公式“=COUNTIF(A1:A5，"女")”返回3。
            
        判断单元格是否为空
            =ISBLANK(A1)
            
    查询、转换、引用公式
        查找单元格内容
            =FIND(find_text,within_text,start_num)
            作用：用于定位某一个字符（或字符串）在指定的字符串中的起始位置序号
            其中括号内的Find_text表示我们要查找的字符串。
            Within_text表示要超找的区域，也就是需要在哪个单元格内查找find_text
            Start_num 指定开始进行查找的字符数。比如Start_num为1，则从单元格内第一个字符开始查找关键字。如果忽略 start_num，则假设其为 1。
            
        行/列数
            ROW（）——行数
            COLUMN()——列数
            
        提取单元格内容
            =MID/MIDB(text,start_num,num_chars)
            作用：是从指定字符串中指定位置提取指定个数字符。
            text表示指定的字符串，一般为引用的单元格；start_num表示开始的位置;num_chars表示指定个数
            注：MIDB函数可以用于双字节字符。 
            实例：如果A1=电子计算机，则公式“=MID(A1，3，2)”返回“计算”，=MIDB(A1，3，2)返回“子”。 
            
        从左/右提取单元格内容
            =LEFT/LEFTB(text,num_chars)/=RIGHT/RIGHTB(TEXT，NUM_CHARS)
            作用：text代表用来截取的单元格内容。num_chars代表从左开始截取的字符数。
            text代表用来截取的单元格内容；num_chars代表从左开始截取的字符数。
            
        内容选取
            =CHOOSE(INDEX_NUM，VALUE1，VALUE2，...)。
            用途：可以根据给定的索引值，从多达29个待选参数中选出相应的值或操作。
            实例：公式“=CHOOSE(2，"电脑"，"爱好者")返回“爱好者”。
            
         显示列编号
            =COLUMN(reference（reference为单元格）)
            主要功能：显示所引用单元格的列标号值。 
            
         引用函数
            =CONCATENATE(Text1，Text……)
            主要功能：将多个字符文本或单元格中的数据连接在一起，显示在一个单元格中。
            应用举例：=CONCATENATE(A14,"@",B14,".com")，将上述公式改为：=A14&"@"&B14&".com"，也能达到相同的目的。
            
        随机数值函数
            =RAND()（注：不需要参数 ）
            用途：返回一个大于等于0小于1的随机数，每次计算工作表(按F9键)将返回一个新的数值。
            实例：公式“=RAND()*1000”返回一个大于等于0、小于1000的随机数。 如果要生成A，B之间的随机实数，可以使用公式“=RAND()*(B-A)+A”。如果在某一单元格内应用公式“=RAND()”，然后在编辑状态下按住F9键，将会产生一个变化的随机数。
            
        返回文本窜的字符/节数
            =LEN/LENB(TEXT)
            注意：此函数用于双字节字符，且空格也将作为字符进行统计。
             实例：如果A1=电脑爱好者，则公式“=LEN(A1)”返回5，=LENB(A1)返回10。
             
         将数值转换为按指定数字格式表示的文本。
            =TEXT(VALUE，FORMAT_TEXT)。 
            参数：VALUE是数值、计算结果是数值的公式、或对数值单元格的引用；FORMAT_TEXT是所要选用的文本型数字格式， 即“单元格格式”对话框“数字”选项卡的“分类”列表框中显示的格式，它不能包含星号“*”。 
            实例：如果A1=2986.638，则公式“=TEXT(A5，"#，##0.00")”返回2，986.64。 

        
        GET.CELL——获取单元格的信息
            先定义后使用
            

    注释：公式中出现的$为“固定”的意思，行前面出现$则行固定，列同理；格式复制可以将设定的格式进行复制到其他的单元格；
    
    公式-名称管理-新建
        建立可跨工作簿的公式、规则等
    
    编写Excel自定义函数
        进入编写环境：ALT+F11调出VBA窗口，插入-模块
        代码编写：通常自定义函数是用function命令开始的，在这个命令后面给它指定一个名字和参数把下面这个自定义函数代码粘贴到刚插入的用户模块中就可以使用了。
            Function sjxmj(di, gao)
            sjxmj = di * gao / 2 
            End Function
            注：sjxmj是自己取的函数名（三角形面积），di和gao是参数（底和高）
        自定义函数的使用：例如在C1中输入=sjxmj（A1，B1）即可算出填在A1、B1中的底边长和高的三角形的面积。
----------------------------------------------------------------------------
◆Question And Answer
    ★怎样设置滚动条的滚动范围及滚动条的长度？
    
    Excel打开的文件多窗口显示（虽然可以在Excel软件中实现多窗口如再次激活程序并在其中打开文档，但不及分开后的方便操作、更大化的显示），增加比如可以将某个打开的文件拖拽成一个单独的窗口。
        
    ★★★★時間格式快速輸入（假如14-25-39輸入的時間為14：25：39，可惜沒有）
-------------------------------------------------------------------------待整理
  数据整理使用
    对所填的数值进行判断
      新建规则-设置超出范围内数值的格式，如字体颜色、单元格颜色等
        
    单双行交替不同颜色
      设定格式-输入值=ISEVEN(ROW（）)
      设定X行为某种颜色
          =MOD(ROW(),x)=0
    









































