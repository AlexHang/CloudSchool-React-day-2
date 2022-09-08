import axios from "axios";
import { useEffect, useState } from "react";
import NewsFeedEntry from "./NewsFeedEntry";

function MyStatelessComponent(){

    const [user, setUser] = useState("test user");
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        console.log("Behavior before the component is added to the DOM");
    }, []);


    useEffect(() => {
        console.log("Behavior when the value of 'user' changes. ", user);
    }, [user]);


    const sayHello = () =>{
        window.alert("hello " + user);
        console.log(f(10, 12));
    }

    const f = (i =0,j = 5,k =3)=>{

        const user = {
            name:"alex",
            email:"test@test",
            password:"test1234",
        };

        const {email, password} = user;
        console.log(email,password);
        let x = myGenerator();
        console.log('generator', x.next().value);
        console.log('generator', x.next().value);
        console.log('generator', x.next().value);
        return{i,j,k};
    }

    const myGenerator = function*(){
        yield 'a';
        yield 'b';
        yield 'c';
        return 'done';
    }

    const getUserPosts = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response);
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error);
        });
    }

    return <>
        <h1>
            Hello, {user}
            <br/>
            <input type="text" value={user} onChange={e=>setUser(e.target.value)} />
            <br/>
            <button onClick={sayHello}>Hello</button>
            <button onClick={getUserPosts}>Get Posts</button>
        </h1>
        
        <div>
            {
                posts.map(newsPost => <NewsFeedEntry title={newsPost.title} body={newsPost.body}/>)
            }
        </div>

      </>  

}

export default MyStatelessComponent;