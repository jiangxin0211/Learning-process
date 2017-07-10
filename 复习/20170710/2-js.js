/**
 * 返回指定的元素的下一个元素兄弟
 * @param elem
 */

function next(elem){
    do{
        elem = elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * 返回指定的元素的前一个元素兄弟
 * @param elem
 * @returns {*} 指定的元素的前一个元素兄弟
 */

function prev(elem){
    do{
        elem = elem && elem.previousSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}

/**
 * 查找指定元素的第一个孩子节点
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






