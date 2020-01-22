# Javascript-Html-Generator
Generate html from javascript data structures
Example:
```
var htmlgen=new htmlgen();
var tmp={type:'div',settings:{className:'container'},ext:{type:'table',settings:{className:'tbx setx'},tnodes:[
            {r:1,c:1,settings:{style:{border:'1px solid black',display:'none'}},ext:{type:'table',settings:{className:'tbx setx'},tnodes:[
                {r:1,c:1,settings:{style:{textAlign:'left'}},ext:{type:'div',settings:{className:'nav_top_left',style:{display:'inline-block'}},ext:{type:'span',ext:{type:'textnode',text:'true test'}}}},
                {r:1,c:2,settings:{style:{textAlign:'right'}},ext:{type:'div',settings:{className:'nav_top_right',style:{display:'inline-block'}},ext:{type:'span',ext:{type:'textnode',text:'testing 123'}}}}
            ]}},
            {r:2,c:1,settings:{className:'nav_logo'},ext:{type:'div',ext:{type:'span',settings:{className:'maintitle'},ext:{type:'textnode',text:'Testing'}}}},
            {r:3,c:1,settings:{style:{border:'1px solid black',backgroundColor:'#2093ef6e'}},ext:{type:'table',settings:{style:{tableLayout:'fixed',boxSizing:'border-box'},className:'tbx setx'},cols:{settings:{className:"nav_bottom_area_cell"}},tnodes:[
                {r:1,c:1,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test1'}}}},
                {r:1,c:2,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test2'}}}},
                {r:1,c:3,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test3'}}}},
                {r:1,c:4,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test4'}}}},
                {r:1,c:5,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test5'}}}},
                {r:1,c:6,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test6'}}}},
                {r:1,c:7,ext:{type:'div',settings:{className:'nav_sections'},ext:{type:'span',ext:{type:'textnode',text:'test7'}}}}
            ]}}]}};
 document.body.appendChild(htmlgen.generator(dx));
```
