class BoxList {
    constructor(margin) {
        this._margin = margin;
    }
    init(width, item_width, column) {
        this._width = width;
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

        if (this._count < this._column) {
            no = this._count;
            posi_x = this._item_width * no + this._margin * (no + 1);
            posi_y = this._margin;
            this._height[this._count] = height + this._margin;
            this._count++;
            return [posi_x, posi_y];

        }

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
}

$(function(){
    var iw = 200;
    var mr = 10;
    var w = $("#test").width();
    var c = Math.floor((w - mr) / (iw + mr));
    var iw_max = Math.floor((w - mr) / c) - mr;
    var boxitem = $("#test").children();
    for (var i = 0; i < boxitem.length; i++){
        $(boxitem[i]).css({"width": iw_max+"px"});
    }
    var boxlist = new BoxList(mr);
    $(window).on('load resize', function(){
        w = $("#test").width();
        c = Math.floor((w - mr) / (iw + mr));
        iw_max = Math.floor((w - mr) / c) - mr;
        $(boxitem[i]).css({"width": iw_max+"px"});
        boxlist.init(w, iw_max, c);
        for (var i = 0; i < boxitem.length; i++){
            var h = $(boxitem[i]).height();
            var p = boxlist.sort(h);
            $(boxitem[i]).css({"top": p[1]+"px", "left": p[0]+"px", "width": iw_max+"px", "position": "absolute"});
        }
    });

});
