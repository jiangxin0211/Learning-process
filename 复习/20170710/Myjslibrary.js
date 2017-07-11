function $(selector,context){
    context = context || document;
    switch(selector.charAt(0)){
        case '#': //id
            return [document.getElementById(selector.substring(1))];
            break;
        case '.': //class
            return context.getElementsByClassName(selector.context);
            break;
        default: //tag
            return context.getElementsByTagName(selector);
        break;
    }
}

/**
 * ���ҷ���className��Ԫ��
 * @param className
 * @param context
 * @returns {Array}
 */
function getByClass(className,context){
    context = context || document;
    var result = [];
    var arr = context.getElementsByTagName("*");
    var re = new RegExp("\\b"+className+"\\b",'g');
    for(var i = 0; i<=arr.length; i++){
        if(re.test(arr[i].className)){
            result.push(arr[i]);
        }
    }
    return result;
}
/**
 * ����ָ��Ԫ�ص���һ��Ԫ���ֵ�
 * @param elem
 * @returns {*}ָ��Ԫ�ص���һ��Ԫ���ֵ�
 */
function next(elem){
    do{
        elem = elem && elem.nextSibling;
    }while(elem && elem.nodeType != 1);
    return elem;
}
/**
 * ����ָ��Ԫ�ص�ǰһ��Ԫ���ֵ�
 * @param elem
 * @returns {*}ָ��Ԫ�ص�ǰһ��Ԫ���ֵ�
 */
function prev(elem){
    do{
        elem= elem && elem.previousSibling;
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
    return elem &&elem.nodeType == 1 ? elem : next(elem);
}
/**
 * ����ָ��Ԫ�ص����һ�����ӽڵ�
 * @param elem
 * @returns {*}
 */
function last(elem){
    elem = elem.lastChild;
    return elem &&elem.nodeType == 1 ? elem : prev(elem);
}
/**
 * �ڸ����ĵ�ǰԪ�ص�ǰ�����һ����Ԫ��
 * @param elem
 * @param newNode
 */
function before(elem,newNode){
    elem.parentNode.insertBefore(newNode,elem);
}

//before(oH1,oSpan);
/**
 * �ڸ����ĵ�ǰԪ�صĺ������һ����Ԫ��
 * @param elem
 * @param newNode
 */
function after(elem,newNode){
    if(elem.nextSibling){
        before(elem.nextSibling,newNode);
    }else{
        elem.parentNode.appendChild(newNode);
    }
}
/**
 * ɾ��������Ԫ��
 * @param elem
 */
function remove(elem){
    elem.parentNode.removeChild(elem);
}

/**
 * @param elem ��ǰԪ��
 * @returns {Array} ���ص�ǰԪ�ص�Ԫ�ؽڵ�
 */

function siblings(elem) {
    var arr = [];
    var elements = elem.parentNode.children;
    for(var i=0; i<elements.length; i++){
        if(elements[i] != elem){
            arr.push(elements[i]);
        }
    }
    return arr;
}

function cloneObj(obj) {
    var newObj = {};
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            newObj[p] = arguments.callee(obj[p]);
        }else{
            newObj[p] = obj[p];
        }
    }
    return newObj;
}

/**
 * @param target ���ϲ���Ŀ�����
 * @param obj Ҫ�ϲ��Ķ���
 * @return ���غϲ����µĶ���
 */
function extend(target, obj) {
    for(var p in obj){
        if(typeof obj[p] === 'object'){
            target[p] = cloneObj(obj[p]);
        }else{
            target[p] = obj[p];
        }
    }
    return target;
}

/**
 * ȥ����β�ո�
 * @param str
 * @returns {XML|string|void}
 */

function trim(str){
    return str.replace(/^\s+|\s+$/g,'');
}

























