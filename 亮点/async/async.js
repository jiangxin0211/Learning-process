/**
 * Created by Administrator on 2017/12/4 0004.
 */
function testAsync(){
    var temp;
    $.ajax({
        async: false,
        type: "GET",
        url: 'test.php',
        complete: function(msg){
            alert('complete');
        },
        success: function(data){
            alert('success');
            temp=data;
        }
    });
    alert(temp + 'end');
}
/*async:false,(Ĭ����true)��
���ϣ�falseΪͬ�������testAsync����������Ajax�������������������
ֻ��test.phpִ�н����󣬲ſ���ִ������������

��async:trueʱ��ajax����ʱ�첽�ġ����������и����⣺
testAsunc()�е�ajax����������Ĳ������첽ִ�еģ�
��ô��test.php��δִ���꣬�Ϳ����Ѿ�ִ����Ajax�������Ĳ�����
�磺alert(temp +'end');
Ȼ����temp�����������ajax����success��ŷ��ʵģ����������ǻ�Ϊ�ա�

*/








