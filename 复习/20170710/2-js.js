/**
 * ����ָ����Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 */

function next(elem){
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * ����ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @returns {*} ָ����Ԫ�ص�ǰһ��Ԫ���ֵ�
 */

function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 * ����ָ��Ԫ�صĵ�һ�����ӽڵ�
 * @param elem
 * @returns {*}
 */
function first(elem){
    elem = elem.firstChild;
    return elem && elem.nodeType == 1 ? elem : next(elem);
}

/**
 *
 * @param elem
 */

function last(elem){

}






