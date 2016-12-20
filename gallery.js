class BoxList {

    constructor(margin) {
        this._margin = margin;
    }

    init(item_width, column) {
        this._item_width = item_width;
        this._column = column;
        this._height = new Array();
        this._count = 0;
    }

    sort(height) {
        let posi_x = 0;
        let posi_y = 0;
        let no = 0;
        let num = 0;

        //1列目
        if (this._count < this._column) {
            no = this._count;
            posi_x = this._item_width * no + this._margin * (no + 1);
            posi_y = this._margin;
            this._height[this._count] = height + this._margin;
            this._count++;
            return [posi_x, posi_y];
        }

        //2列目以降
        for (let i = 0; i < this._column; i++) {
            if (i == 0 || num > this._height[i]) {
                no = i;
                num = this._height[i];
            }
        }
        posi_x = this._item_width * no + this._margin * (no + 1);
        posi_y = this._height[no] + this._margin;
        this._height[no] = this._height[no] + height + this._margin;
        this._count++;
        return [posi_x, posi_y];
    }

    getHeight() {
        let max_height = Math.max.apply(null, this._height);
        if (max_height) {
            return max_height;
        } else {
            return 0;
        }
    }
}

function gallery(_tr,_iw,_mr){
    var target = _tr;
    var box_item = $(_tr).children();
    var iw = _iw;
    var mr = _mr;
    var w, c, iw_max;

    var boxlist = new BoxList(mr);

    $(window).on('load resize', function(){
        //サイズ設定
        w = $(_tr).width();
        c = Math.floor((w - mr) / (iw + mr));
        iw_max = Math.floor((w - mr) / c) - mr;
        for (var i = 0; i < box_item.length; i++){
            $(box_item[i]).css({"width": iw_max+"px"});
        }
        //初期化
        boxlist.init(iw_max, c);
        //整列
        for (var i = 0; i < box_item.length; i++){
            var h = $(box_item[i]).height();
            var p = boxlist.sort(h);
            $(box_item[i]).css({"top": p[1]+"px", "left": p[0]+"px", "width": iw_max+"px", "position": "absolute"});
        }
        //大枠の高さを調節
        $(_tr).css("height", boxlist.getHeight()+mr+"px");
    });
}
