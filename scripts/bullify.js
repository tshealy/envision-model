function Bullify(options) {

    this.str = ''
    
    this.Tag = function(tag) {
        this.tag = tag

        this.open = function() {
            return '<' + this.tag + '>'
        }

        this.closed = function() {
            return '</' + this.tag + '>'
        }
    }

    this.listType = new this.Tag(arguments[0])
    this.itemType = new this.Tag(arguments[1])

    this.bullify = function(list) {
        return this.listType.open() + this.loop(list) + this.listType.closed();
    }

    this.loop = function(list) {
        for (var i = 0; i < list.length; i++) {
            if (list[i] instanceof Array) {
                this.str += this.listType.open();
                this.loop(list[i]);
                this.str += this.listType.closed() + this.itemType.closed();
            } else {
                this.str += this.itemType.open() + list[i] + (list[i + 1] instanceof Array ? '' : this.itemType.closed())
            }
        }

        return this.str
    }
}