
 function htmlgen(){
    this.uids={};
    this.real_id={};
    this.setid=function(a){
        if(a instanceof Array)
        {
            var id=this.genid(a.length);
            for(var x=0;x<id.length;x++) this.real_id[a[x]]=id[x];
        }
        else{
            this.real_id[a]=this.genid(1);
        }
    };

    this.deleteid=function(a){
        delete this.real_id[a];
    };

    this.getid=function(a){
        return (this.real_id.hasOwnProperty(a))?this.real_id[a]:null;
    };

    this.clearallid=function(){
        this.real_id={};
    };
    this.genid=function(amt){
        var result=[];
        for(var x=0;x<amt;)
        {
            var tmp=((new Date).getTime()*Math.random()).toString(16).replace(/(.+?)(?=\.).*|(.+)/,"$1$2");
            if(!this.uids.hasOwnProperty(tmp))
            {
                this.uids[tmp]=1;
                result.push(tmp);
                x++;
            }
        }
        return result;
    };

 this.dmset=function(a,b,c,d){
     if(typeof(c)==='undefined') c=[];
     if(typeof(d)==='undefined') d=0;
    if(d===0)
    {
        if(b instanceof Array)
        {
            for(var x=0;x<b.length;x++) this.dmset(a,b[x],c,d);
        }
        else if(b instanceof Object)
        {
            for(var x=0,z=Object.keys(b),v;x<z.length;x++)
            {
                if(z[x]=='function'&&(v=1)||z[x]=='nfunction'&&(v=2))//{settings:{addEventLister:functions:[[1,2,3]]}}   {className:{add:'function':['click',function(){}]}}
                {
                    if(b[z[x]] instanceof Array)
                    {
                        this.dmset(a,b[z[x]],c,v);
                    }
                    else if(b[z[x]] instanceof Object)
                    {
                        for(var y=0,w=Object.keys(b[z[x]]);y<w.length;y++)
                        {
                            this.dmset(a,[w[y],b[z[x]][w[y]]],c,v);
                        }
                    }
                }
                else if(z[x]=='functions'&&(v=1)||z[x]=='nfunctions'&&(v=2))
                {
                    for(var y=0,w=b[z[x]];y<w.length;y++)
                    {
                        if(w[y] instanceof Array)
                        {
                            this.dmset(a,w[y],c,v);//this.dmset(a,b[z[x]],c,v);
                        }
                        else if(w[y] instanceof Object)
                        {
                            for(var m=0,n=Object.keys(w[y]);m<n.length;m++)
                            {
                                this.dmset(a,[n[m],w[y][n[m]]],c,v);
                            }
                        }
                        
                    }
                }
                else{
                    this.dmset(a,b[z[x]],[].concat(c,[z[x]]));
                }
            }
        }
        else if(typeof(b)!=='undefined'&&b!==null){
            switch(c.length){
                case 1:a[c[0]]=b; break;
                case 2:a[c[0]][c[1]]=b; break;
                case 3:a[c[0]][c[1]][c[2]]=b; break;
                case 4:a[c[0]][c[1]][c[2]][c[3]]=b; break;
                case 5:a[c[0]][c[1]][c[2]][c[3]][c[4]]=b; break;
                case 6:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]]=b; break;
                case 7:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]]=b; break;
                case 8:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]]=b; break;
                case 9:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]]=b; break;
                case 10:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]][c[9]]=b; break;
            }
        }
    }
    else{
        //console.log("a:",a,' c:',c," b:",b);
        switch(c.length){
            case 1:a[c[0]].apply(a,b); break;
            case 2:a[c[0]][c[1]].apply((d==1)?a:a[c[0]],b); break;
            case 3:a[c[0]][c[1]][c[2]].apply((d==1)?a:a[c[0]][c[1]],b); break;
            case 4:a[c[0]][c[1]][c[2]][c[3]].apply((d==1)?a:a[c[0]][c[1]][c[2]],b); break;
            case 5:a[c[0]][c[1]][c[2]][c[3]][c[4]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]],b); break;
            case 6:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]][c[4]],b); break;
            case 7:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]],b); break;
            case 8:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[6]][c[7]],b); break;
            case 9:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]],b); break;
            case 10:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]][c[9]].apply((d==1)?a:a[c[0]][c[1]][c[2]][c[3]][c[4]][c[5]][c[6]][c[7]][c[8]],b); break;
        }
       // console.log("after the apply");
    }
};
 this.fset=function(a,b){//dom node,array or Object
    for(var x=0,y=[].concat(b);x<y.length;x++)
    {
        for(var z=0,w=Object.keys(y[x]);z<w.length;z++)
        {
            a[w[z]].apply(a,y[x][w[z]]);
        }
    }
};
this.setval=function(a,b,c,d){//save:[{set:ds,loc:{data:{here1:{here2:{null}}}}}]
if(typeof(c)==='undefined') c=null;
if(typeof(d)==='undefined') d=false;
    if(d==true&&b instanceof Array)
    {
        for(var x=0;x<b.length;x++)
        {
            this.setval(a,b[x],null,true);//b[x].loc,b[x].set);
        }
    }
    else if(b instanceof Object)
    {
        if(d==true&&b.hasOwnProperty('set')&&b.hasOwnProperty('loc'))
        {
            if(b.set instanceof Array)
            {
                for(var x=0;x<b.set.length;x++)
                {
                    this.setval(a,b.loc,b.set[x]);
                }
            }
            else{
                this.setval(a,b.loc,b.set);
            }
        }
        else{
            for(var x=0,y=Object.keys(b);x<y.length;x++)
            {
                if(b[y[x]]!==null)
                {
                    if(!c.hasOwnProperty(y[x])||!(c[y[x]] instanceof Object)) c[y[x]]={};
                    this.setval(a,b[y[x]],c[y[x]]);
                }
                else{
                    c[y[x]]=a;
                }
            }
        }
    }
};
 this.paramcheck=function(a,b){
    if(b.hasOwnProperty("functions"))
    {
        this.fset(a,b.functions);
    }
    if(b.hasOwnProperty("settings"))
    {
        this.dmset(a,b.settings);
    }
    if(b.hasOwnProperty("save"))
    {
        if(b.save instanceof Array||b.save.hasOwnProperty('set')&&b.save.hasOwnProperty('loc'))
        {
            this.setval(a,b.save,null,true);//save:[{set:ds,loc:{data:{here1:{here2:{null}}}}}]
        }
        else{
            for(var x=0,y=Object.keys(b.save);x<y.length;x++)//{save:{valx:{}}}
            {
                var j=b.save[y[x]];
                j[y[x]]=a;
            }
        }
    }
    if(b.hasOwnProperty("push"))
    {
        for(var x=0,y=Object.keys(b.save);x<y.length;x++)//{save:{valx:{}}}
        {
            var j=b.save[y[x]];
            j[y[x]].push(a);
        }
    }
    if(b.hasOwnProperty("sub"))
    {
        for(var x=0,y=Object.keys(b.save);x<y.length;x++)//{save:{valx:{}}}
        {
            var j=b.save[y[x]];
            (j[y[x]])(a);
        }
    }
};
    this.genobj=function()
    {
        return {'parent':null,'child':null,'prev':null,'next':null,'dom':null};
    };
//type: dom   -----   to:[]
    this.generator2=function(dx,parent)
    {
        for(var c=0,e=(dx instanceof Array),d=[].concat(dx);c<d.length;c++)
        {
            if(d[c]===null) continue;
            else if(d[c] instanceof Array)
            {
                this.generator2(d[c],parent);
            }
            else if(d[c].type=='dom')
            {
                if(d[c].hasOwnProperty('element'))
                {
                    if(e){parent.appendChild(d[c].element);}
                    else{return d[c].element;}
                    
                }
                else if(d[c].hasOwnProperty('html'))
                {
                    var cz=document.createElement('div');
                    cz.innerHTML=d[c].html;
                    if(cz.hasChildNodes())
                    {
                        if(e)
                        {
                            for(var x=0,y=cz.childNodes;x<y;x++)
                            {
                                parent.appendChild(y[x]);
                            }
                        }
                        else{return d[c].element;}
                    }
                }
            }
            else if(d[c].type!='table')
            {
                var dm=null;
                
                if(d[c].type==='textnode')
                {
                    if(d[c].hasOwnProperty('text')) dm=document.createTextNode(d[c].text);
                }
                else if(d[c].text==='comment')
                {
                    if(d[c].hasOwnProperty('text')) dm=document.createComment(d[c].text);
                }
                else{
                    dm=document.createElement(d[c].type);
                    this.paramcheck(dm,d[c]);
                    if(d[c].hasOwnProperty('ext'))
                    {
                        var z=this.generator2(d[c].ext,dm);
                        if(typeof(z)!=='undefined'&&z!==null)
                        {
                            if(NodeList.prototype.isPrototypeOf(z))
                            {
                                for(var x=0;x<z.length;x++)
                                {
                                    dm.appendChild(z[x]);
                                }
                            }
                            else{
                                dm.appendChild(z);
                            }
                        }
                    }
                }
                if(e)
                {
                    parent.appendChild(dm);
                }
                else{
                    return dm;
                }
            }
            else{
                var mz=[document.createElement((d[c].hasOwnProperty('ttype'))?d[c].ttype:'div')];
                this.paramcheck(mz[0],d[c]);
                if(d[c].hasOwnProperty('tnodes'))
                {
                    var rows=[];
                    var rtype=(d[c].hasOwnProperty('rtype'))?d[c].rtype:'div';
                    var ctype=(d[c].hasOwnProperty('ctype'))?d[c].ctype:'div';
                    var r_all=d[c].hasOwnProperty('allrows');
                    var rrows=d[c].hasOwnProperty('rows');
                    var ccols=d[c].hasOwnProperty('cols');
                    var tablemaster=function(ax){
                        for(var x=0,last_col,tnodes=[].concat(ax);x<tnodes.length;x++)
                        {
                            if(tnodes[x]===null) continue;
                            else if(tnodes[x] instanceof Array)  tablemaster(tnodes[x]);
                            else{
                                var cx=tnodes[x];
                                for(var y=1;mz.length<=cx.r;y++)
                                {
                                    var zx=document.createElement(rtype);
                                    mz[0].appendChild(zx);
                                    mz.push(zx);
                                    if(rrows) this.paramcheck(zx,d[c].rows);
                                    if(cx.hasOwnProperty('rows')) this.paramcheck(zx,cx.rows);
                                    if(r_all) this.paramcheck(zx,d[c].allrows);
                                }
                                if(!rows.hasOwnProperty(cx.r)) rows[cx.r]=0;
                                if(rows[cx.r]<cx.c)
                                {
                                    for(var y=rows[cx.r]+1;y<=cx.c;y++)
                                    {
                                        var dz=document.createElement(ctype);
                                        mz[cx.r].appendChild(dz);
                                        if(ccols) this.paramcheck(dz,d[c].cols);
                                        if(cx.hasOwnProperty('cols')) this.paramcheck(dz,cx.cols);
                                        if(y+1>cx.c) last_col=dz;
                                    }
                                    rows[cx.r]=cx.c;
                                }
                                this.paramcheck(last_col,cx);
                                if(cx.hasOwnProperty('ext'))
                                {
                                    var z=this.generator2(cx.ext,last_col);
                                    if(typeof(z)!=='undefined'&&z!==null)
                                    {
                                        if(NodeList.prototype.isPrototypeOf(z))
                                        {
                                            for(var u=0;u<z.length;u++)
                                            {
                                                last_col.appendChild(z[u]);
                                            }
                                        }
                                        else{
                                            last_col.appendChild(z);
                                        }
                                    }
                                }
                            }
                        }
                    }.bind(this);
                    tablemaster(d[c].tnodes);
                    if(d[c].hasOwnProperty('rsel'))
                    {
                        for(var y=0,h=Object.keys(d[c].rsel);y<h.length;y++)
                        {
                            if(h[y]>0&&h[y]<mz.length) this.paramcheck(mz[h[y]],d[c]['rsel'][h[y]]);
                        }
                    }
                }
                if(d[c].hasOwnProperty('ext'))
                {
                    var z=this.generator2(cx.ext,mz[0]);
                    if(typeof(z)!=='undefined'&&z!==null)
                    {
                        if(NodeList.prototype.isPrototypeOf(z))
                        {
                            for(var u=0;u<z.length;u++)
                            {
                                mz[0].appendChild(z[u]);
                            }
                        }
                        else{
                            mz[0].appendChild(z);
                        }
                    }
                }
                if(e)
                {
                    parent.appendChild(mz[0]);
                }
                else{
                    return mz[0];
                }
            }
        }
    };
    this.generator=function(dx,mx){
        for(var c=0,last=null,e=(dx instanceof Array),d=[].concat(dx);c<d.length;c++)
        {
            //console.log("d[c]:",d[c]);
            //console.log("mx:",mx);
            if(d[c]===null) continue;
            else if(d[c] instanceof Array)
            {
                this.generator(d[c],(mx instanceof Object)?mx:{'parent':null,'child':null,'prev':null,'next':null,'dom':null});
            }
            else if(d[c].type=='dom')//
            {
                var zc=(mx instanceof Object)?mx:{'parent':null,'child':null,'prev':null,'next':null,'dom':null};
                var insideout=function(nd,jx,index){ //jx={'parent':null,'child':null,'prev':null,'next':null,'dom':null}
                    jx.dom=nd;
                    if(index>0&&last!==null)
                    {
                        last.next=jx;
                        jx.prev=last;
                    }
                    if(jx.parent!==null)
                    {
                        if(jx.parent.child===null)
                        {
                            jx.parent.child=jx;
                        }
                        else if(!(jx.parent.child instanceof Array))
                        {
                            jx.parent.child=[].concat(jx.parent.child,jx);
                        }
                        else if(jx.parent.child instanceof Array)
                        {
                            jx.parent.child.push(jx);
                        }
                    }
                    last=jx;
                    for(var x=0,y=nd.children;x<y.length;x++)
                    {
                        var datatemp={'parent':jx,'child':null,'prev':null,'next':null,'dom':null};
                        insideout(y[x],datatemp,x);
                    }
                };
                insideout(d[c].dom,zc);
                last=zc;
                if(e)
                {
                    zc.parent.dom.appendChild(zc.dom);
                }
                else
                {
                    return zc.dom;
                }
            }
            else if(d[c].type!=='table')
            {
                var zc=(mx instanceof Object)?mx:{'parent':null,'child':null,'prev':null,'next':null,'dom':null};   
                //console.log("zc:",zc);       
                if(d[c].type!=='textnode')
                {
                    zc.dom=document.createElement(d[c].type);
                    if(c>0&&last!==null)
                    {
                        last.next=zc;
                        zc.prev=last;
                    }
                   // console.log("zc.parent:",zc.parent);
                    if(zc.parent!==null)
                    {
                        if(zc.parent.child===null)
                        {
                            zc.parent.child=zc;
                        }
                        else if(!(zc.parent.child instanceof Array))
                        {
                            zc.parent.child=[].concat(zc.parent.child,zc);
                        }
                        else if(zc.parent.child instanceof Array)
                        {
                            zc.parent.child.push(zc);
                        }
                    }
                    this.paramcheck(zc.dom,d[c]);
                    if(d[c].hasOwnProperty('ext'))
                    {
                        zc.child={'parent':zc,'child':null,'prev':null,'next':null,'dom':null};
                        if(d[c].ext instanceof Array)
                        {
                            this.generator(d[c].ext,zc.child);
                        }
                        else{
                            zc.dom.appendChild(this.generator(d[c].ext,zc.child));
                        }
                    } 
                }
                else{
                    zc.dom=document.createTextNode(d[c].text);
                }
                last=zc;
                if(e)
                {
                    zc.parent.dom.appendChild(zc.dom);
                }
                else
                {
                    return zc.dom;
                }
            }
            else{ //table found for type
                var rows={};//(mx instanceof Object)?mx:{};//'parent':zc,'child':null,'prev':null,'next':null,'dom':null
                //{'len':1,'parent':(mx!==null)?mx:null,'child':[],'prev':null,'next':null,'dom':document.createElement("div")}
                var mz;
                // console.log("mx:",mx);
                if(typeof(mx)!=='undefined'&&mx!==null)
                {
                    mz=[mx];
                    mx.dom=document.createElement((d[c].hasOwnProperty("ttype"))?d[c].ttype:"div");
                    mx.child=[];
                }
                else{
                    mz=[{'parent':null,'child':[],'prev':null,'next':null,'dom':document.createElement((d[c].hasOwnProperty("ttype"))?d[c].ttype:"div")}];
                }//main table
                //console.log("testing code0:",d[c].tnodes);
                this.paramcheck(mz[0].dom,d[c]);//table parameters
                var rtype=(d[c].hasOwnProperty("rtype"))?d[c].rtype:"div",ctype=(d[c].hasOwnProperty("ctype"))?d[c].ctype:"div";
                var tablemaster=function(ax){
                    for(var x=0,tnodes=[].concat(ax);x<tnodes.length;x++)
                    {
                        if(tnodes[x]===null) continue;
                        else if(tnodes[x] instanceof Array) tablemaster(tnodes[x]);
                        else{
                            var cx=tnodes[x];
                            for(var y=1;mz.length<=cx.r;y++)//creating rows
                            {
                                var zx=document.createElement(rtype);
                                mz[0].dom.appendChild(zx);
                                var tmp={'parent':mz[0],'child':[],'prev':null,'next':null,'dom':zx};
                                mz[0].child.push(tmp);
                                mz.push(tmp);
                                if(y>1)
                                {
                                    mz[y-1].next=tmp;
                                    mz[y].prev=mz[y-1];
                                }
                                if(d[c].hasOwnProperty("rows"))
                                {
                                    this.paramcheck(zx,d[c].rows);
                                }
                                if(cx.hasOwnProperty("rows"))//row actions - settings- save- push - and the rest
                                {
                                    this.paramcheck(zx,cx.rows);//mz[y].dom  cx.r
                                }
                            }
                            if(!rows.hasOwnProperty(cx.r)){
                                rows[cx.r]={'len':0,'col':{}};
                            }
                            if(rows.hasOwnProperty(cx.r)&&rows[cx.r].len<cx.c)//creating columns
                            {
                                //console.log("len:",rows[cx.r].len);
                                for(var y=rows[cx.r].len+1;y<=cx.c;y++)
                                {
                                    var dz=document.createElement(ctype);
                                    //rows[cx.r].col[y]={'rows':null,'dom':dz};//document.createElement("div");
                                    var tmp={'parent':mz[cx.r],'child':null,'prev':null,'next':null,'dom':dz};
                                    rows[cx.r].col[y]={'rows':null,'cell':tmp,'dom':dz};
                                    mz[cx.r].child.push(tmp);
                                    if(y>1)
                                    {
                                        mz[cx.r].child[y-2].next=tmp;
                                        tmp.prev=mz[cx.r].child[y-2];
                                    }
                                    mz[cx.r].dom.appendChild(dz);//rows[cx.r].col[y].dom);
                                    //  console.log("b  col:",y);
                                    if(d[c].hasOwnProperty("cols"))
                                    {
                                        this.paramcheck(dz,d[c].cols);
                                    }
                                    if(cx.hasOwnProperty("cols"))//column actions - settings- save- push - and the rest
                                    {
                                        this.paramcheck(dz,cx.cols);//cx.r
                                    }
                                }

                                rows[cx.r].len=cx.c;
                            }
                            this.paramcheck(rows[cx.r].col[cx.c].dom,cx);//check settings and functions for the aimed cell
                            if(cx.hasOwnProperty("ext"))
                            {
                                var ax={'parent':rows[cx.r].col[cx.c].cell,'child':null,'prev':null,'next':null,'dom':null};
                                if(cx.ext instanceof Array)
                                {
                                    this.generator(cx.ext,ax);
                                }
                                else{
                                    rows[cx.r].col[cx.c].dom.appendChild(this.generator(cx.ext,ax));
                                }
                            }
                        }
                    }
                }.bind(this);
                tablemaster(d[c].tnodes);
                if(d[c].hasOwnProperty("rows"))
                {
                    for(var y=0,h=Object.keys(d[c].rows);y<h.length;y++)
                    {
                        if(h[y]<mz.length)
                        {
                            this.paramcheck(mz[h[y]].dom,d[c].rows[h[y]]);
                        }
                    }
                }
                if(d[c].hasOwnProperty("allrows"))
                {
                    if(d[c].allrows.hasOwnProperty("functions"))
                    {
                        for(var y=1;y<mz.length;y++) this.fset(mz[y].dom,d[c].allrows.functions);
                    }
                    if(d[c].allrows.hasOwnProperty("settings"))
                    {
                        for(var y=1;y<mz.length;y++) this.dmset(mz[y].dom,d[c].allrows.settings);
                    }
                    
                }
                mz[0].data=rows;
                if(c>0&&last!==null)
                {
                    last.next=mz[0];
                    mz[0].prev=last;
                    
                }
                if(mz[0].parent!==null)
                {
                    if(mz[0].parent.child===null)
                    {
                        mz[0].parent.child=mz[0];
                    }
                    else if(!(mz[0].parent.child instanceof Array))
                    {
                        mz[0].parent.child=[].concat(mz[0].parent.child,mz[0]);
                    }
                    else if(mz[0].parent.child instanceof Array)
                    {
                        mz[0].parent.child.push(mz[0]);
                    }
                }
                last=mz[0];
                if(e)//array mode
                {
                    mz[0].parent.dom.appendChild(mz[0].dom);
                }
                else
                {
                    return mz[0].dom;
                }
            }
        }
    };
}