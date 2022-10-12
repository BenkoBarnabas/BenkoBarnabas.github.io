Naan.innerHTML = ""

o1.innerHTML = "a oldal: "
o2.innerHTML = "b oldal: "
o3.innerHTML = "c oldal: "
sz1.innerHTML = "alpha szög: "
sz2.innerHTML = "beta szög: "
sz3.innerHTML = "gamma szög: "

let a = 0
let b = 0
let c = 0
let alpha = 0
let beta = 0
let gamma = 0
let eredmeny = ""

let oldalak = []
let szogek = []

let oldal1 = 0
let oldal2 = 0
let oldal3 = 0
let szog1 = 0
let szog2 = 0
let szog3 = 0

let szorzo = 0


//AZÁMOLÁSO HIH HAHA KAKI
function Send()
{
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
    alpha = (document.getElementById("alpha").value)*Math.PI/180;
    beta = (document.getElementById("beta").value)*Math.PI/180;
    gamma = (document.getElementById("gamma").value)*Math.PI/180;

    o1 = document.querySelector("#o1");
    o2 = document.querySelector("#o2");
    o3 = document.querySelector("#o3");

    sz1 = document.querySelector("#sz1");
    sz2 = document.querySelector("#sz2");
    sz3 = document.querySelector("#sz3");
    Naan = document.querySelector("#Naan");
}



function SineLaw()
{     
    
    if (a && alpha != 0)
    {
        //oldal kell?
        if(a < a + b + c && a*b*c == 0) //szog kell
        {
            //beta hiányzik
            if (beta == 0)
            {
                if (gamma != 0){beta = Math.PI-alpha-gamma} //gamma megvan +a +alkpha
                else //gamma nincs meg +alpha + a
                {
                    if (b != 0) // a alpha b meglsz c
                    {
                        beta = Math.sin(alpha)/a*b
                        beta = Math.asin(beta)
                        gamma = Math.PI-beta-alpha // alpha beta gamma megvan
                        c = a/Math.sin(alpha)*Math.sin(gamma)
                    }
                    else // a alpha c meglesz b
                    {
                        gamma = Math.sin(alpha)/a*c
                        gamma = Math.asin(gamma)
                        // gamma c alpha a
                        beta = Math.PI - alpha - gamma
                        //b oldal
                        b = a/Math.sin(alpha)*Math.sin(beta)
                    }
                }
            }
        }
        else //oldal kell
        {
            // b oldal hinyzik
            if(b == 0)
            {
                //beta szög van meg
                if (beta != 0)
                {
                    b = a/Math.sin(alpha)*Math.sin(beta)
                    if(gamma == 0){gamma = Math.PI-beta-alpha} 
                }
                else if(gamma != 0) 
                {
                    beta = Math.PI-alpha-gamma
                    b = a/Math.sin(alpha)*Math.sin(beta)
                }
                c = a/Math.sin(alpha)*Math.sin(gamma)
                
            }
            else //c oldal hiányzik
            {
                //gamma szög van meg
                if (gamma != 0)
                {
                    c = a/Math.sin(alpha)*Math.sin(gamma)
                    if(beta == 0){beta = Math.PI-gamma-alpha} 
                }
                else if(beta != 0)
                {
                    gamma = Math.PI-alpha-beta
                    c = a/Math.sin(alpha)*Math.sin(gamma)
                }
                b = a/Math.sin(alpha)*Math.sin(beta)
            }
        }
    }
    else if (b && beta != 0)
    {
        //oldal kell?
        if(b < a + b + c && a*b*c == 0) //szog kell
        {
            //beta hiányzik
            if (gamma == 0)
            {
                if (alpha != 0){gamma = Math.PI-alpha-beta} //gamma megvan +alkpha
                else //gamma nincs meg +alpha
                {
                    if (c != 0) // a alpha b meglsz c
                    {
                        gamma = Math.sin(beta)/b*c
                        gamma = Math.asin(gamma)
                        alpha = Math.PI-gamma-beta // alpha beta gamma megvan
                        a = b/Math.sin(beta)*Math.sin(alpha)
                    }
                    else // a alpha c meglesz b
                    {
                        alpha = Math.sin(beta)/b*a
                        alpha = Math.asin(alpha)
                        // gamma c alpha a
                        gamma = Math.PI - beta - alpha
                        //b oldal
                        c = b/Math.sin(beta)*Math.sin(gamma)
                    }
                }
            }
        }
        else //oldal kell
        {
            // b oldal hinyzik
            if(c == 0)
            {
                //beta szög van meg
                if (gamma != 0)
                {
                    c = b/Math.sin(beta)*Math.sin(gamma)
                    if(alpha == 0){alpha = Math.PI-gamma-beta} 
                }
                else if(alpha != 0) 
                {
                    gamma = Math.PI-beta-alpha
                    c = b/Math.sin(beta)*Math.sin(gamma)
                }
                a = b/Math.sin(beta)*Math.sin(alpha)
                
            }
            else //c oldal hiányzik
            {
                //gamma szög van meg
                if (alpha != 0)
                {
                    a = b/Math.sin(beta)*Math.sin(alpha)
                    if(gamma == 0){gamma = Math.PI-alpha-beta} 
                }
                else if(gamma != 0)
                {
                    alpha = Math.PI-beta-gamma
                    a = b/Math.sin(beta)*Math.sin(alpha)
                }
                c = b/Math.sin(beta)*Math.sin(gamma)
            }
        }
    }
    else if (c && gamma != 0)
    {
        //oldal kell?
        if(c < a + b + c && a*b*c == 0) //szog kell
        {
            //beta hiányzik
            if (alpha == 0)
            {
                if (beta != 0){alpha = Math.PI-beta-alpha} //gamma megvan +alkpha
                else //gamma nincs meg +alpha
                {
                    if (a != 0) // a alpha b meglsz c
                    {
                        alpha = Math.sin(beta)/b*c
                        alpha = Math.asin(alpha)
                        beta = Math.PI-alpha-gamma // alpha beta gamma megvan
                        b = c/Math.sin(gamma)*Math.sin(beta)
                    }
                    else // a alpha c meglesz b
                    {
                        beta = Math.sin(gamma)/c*b
                        beta = Math.asin(beta)
                        // gamma c alpha a
                        alpha = Math.PI - gamma - beta
                        //b oldal
                        a = c/Math.sin(gamma)*Math.sin(alpha)
                    }
                }
            }
        }
        else //oldal kell
        {
            // b oldal hinyzik
            if(a == 0)
            {
                //beta szög van meg
                if (alpha != 0)
                {
                    a = c/Math.sin(gamma)*Math.sin(alpha)
                    if(beta == 0){beta = Math.PI-alpha-gamma} 
                }
                else if(beta != 0) 
                {
                    alpha = Math.PI-gamma-beta
                    a = c/Math.sin(gamma)*Math.sin(alpha)
                }
                b = c/Math.sin(gamma)*Math.sin(beta)
                
            }
            else //c oldal hiányzik
            {
                //gamma szög van meg
                if (beta != 0)
                {
                    b = c/Math.sin(gamma)*Math.sin(beta)
                    if(alpha == 0){alpha = Math.PI-beta-gamma} 
                }
                else if(alpha != 0)
                {
                    beta = Math.PI-gamma-alpha
                    b = c/Math.sin(gamma)*Math.sin(beta)
                }
                a = c/Math.sin(gamma)*Math.sin(alpha)
            }
        }
    }
    else if (a*b*c != 0)
    {
        alpha = (Math.pow(b, 2)+Math.pow(c, 2)-Math.pow(a, 2))/ (b*c*2)
        alpha = Math.acos(alpha)
        beta = (Math.pow(a, 2)+Math.pow(c, 2)-Math.pow(b, 2))/ (a*c*2)
        beta = Math.acos(beta)
        gamma = (Math.pow(b, 2)+Math.pow(a, 2)-Math.pow(c, 2))/ (b*a*2)
        gamma = Math.acos(gamma)
    }
    else if (a*b*gamma != 0)
    {
        c = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2)-2*a*b*Math.cos(gamma))
        //szögek
        alpha = Math.sin(gamma)/c*a
        alpha = Math.asin(alpha)
        beta = Math.PI-alpha-gamma
    }
    else if (b*c*alpha != 0)
    {
        a = Math.sqrt(Math.pow(b, 2)+Math.pow(c, 2)-2*b*c*Math.cos(alpha))
        //szögek
        beta = Math.sin(alpha)/a*b
        beta = Math.asin(beta)
        gamma = Math.PI-alpha-beta
    }
    else if (c*a*gamma != 0)
    {
        b = Math.sqrt(Math.pow(c, 2)+Math.pow(a, 2)-2*c*a*Math.cos(beta))
        //szögek
        gamma = Math.sin(beta)/b*c
        gamma = Math.asin(gamma)
        alpha = Math.PI-gamma-beta
    }

    //RAJZI

    //számolás
    oldalak = [a,b,c]
    szogek = [alpha,beta,gamma]

    szorzo = 321/Math.max(a,b,c)
    a = szorzo*a
    b = szorzo*b
    c = szorzo*c

    //rajz
    const canvas = document.querySelector('#canvas');

    if (!canvas.getContext) {
        return;
    }
    const ctx = canvas.getContext('2d');

    // set line stroke and line width
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.fillStyle = "#d3ecf1";
    ctx.fillRect(0, 0, 500, 500);

    // draw a red line 
    ctx.beginPath();
    ctx.moveTo(250, 10);
    console.log (250+a*Math.sin((Math.PI/2-beta)),a*Math.sin(beta)+10)
    ctx.lineTo(250+a*Math.sin((Math.PI/2-beta)),a*Math.sin(beta)+10);
    console.log (250+a*Math.sin((Math.PI/2-beta))-c,a*Math.sin(beta)+10)
    ctx.lineTo(250+a*Math.sin((Math.PI/2-beta))-c,a*Math.sin(beta)+10);
    ctx.lineTo(250, 10);
    ctx.stroke();  


    //átváltás kerekítés
    alpha = alpha*180/Math.PI
    beta = beta*180/Math.PI
    gamma = gamma*180/Math.PI

    a = Math.round((a/szorzo)*100)/100
    b = Math.round((b/szorzo)*100)/100
    c = Math.round((c/szorzo)*100)/100
    alpha = Math.round(alpha*100)/100
    beta = Math.round(beta*100)/100
    gamma = Math.round(gamma*100)/100

    //KIÍR

    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(alpha) || isNaN(beta) || isNaN(gamma) == true)
    {
        Naan.innerHTML = "A háromszög nem létezik :("
        o1.innerHTML = ""
        o2.innerHTML = ""
        o3.innerHTML = ""
        sz1.innerHTML = ""
        sz2.innerHTML = ""
        sz3.innerHTML = ""
    }
    else
    {
        o1.innerHTML = "a oldal: "+a
        o2.innerHTML = "b oldal: "+b
        o3.innerHTML = "c oldal: "+c
        sz1.innerHTML = "alpha szög: "+alpha
        sz2.innerHTML = "beta szög: "+beta
        sz3.innerHTML = "gamma szög: "+gamma
        Naan.innerHTML = ""
    }
    

}
function Main()
{
    Send()
    SineLaw()
    window.open("https://www.bet365.com/olp/open-account?affiliate=365_01023649&rdk=rk4")
}


