( function( $ ) {
    'use strict';

    class Alvin {

        constructor() {
            this.url = 'https://spreadsheets.google.com/feeds/list/1jzviIVbP8AomtyeZb_LnLtGyeoRhCJlsRWibbTOqMSA/1/public/basic?alt=json';
            let target = this;
            let feed = this.getData( this.url, target );
        }
        
        getData( url, target ) {
            let feed = {};

            $.getJSON( url , function(data) {
                let feed = data;
                target.update( feed );
            });
        }

        update( feed ) {

            let entries = feed.feed.entry.length;
            let random_num = Math.floor( ( Math.random() * entries ) );
            let content = feed.feed.entry[random_num]['content']['$t'].split(',');
            let phrase = content[0].replace('phrase: ', '');
            let story  = content[1].replace(' smallstory: ', '');
            let story_cont = content[2];

            $( '.phrase' ).html( phrase );

            if( null == story_cont ){
                $( '.story' ).html( story );
            } else {
                $( '.story' ).html( story + story_cont);
            }

        }
    }

    $(document).ready( function(){
        // Alvin's fitted cap that I clowned. But he liked it, so it's here to stay :)
        let couchFitted  = new Alvin();
    });

} )( jQuery );

