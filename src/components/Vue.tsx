import { useContext } from "react";
import { counterContextObj } from "../contexts/CounterContext";

function Vue() {
  let [counter, setCounter] = useContext(counterContextObj);
 

  return (
    <div>
      <div className="text-center">
        <h1 className="display-4  ">Vue</h1>

        {/* display counter  */}
        <h4>{counter}</h4>
        <button className="btn btn-success" onClick={()=>setCounter(counter+1)}>chnage counter</button>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore earum
          recusandae quam, reiciendis molestias exercitationem fugiat voluptate
          accusantium quas. Voluptatibus, maxime doloremque, soluta ea dolorem,
          ratione rerum minus repellat et architecto omnis excepturi enim dolore
          sequi unde necessitatibus ullam id aperiam corrupti animi vel eos!
          Vel, quia. Ea nemo magnam commodi assumenda qui dolorum cumque iure
          temporibus! Tempore velit officia illo doloribus odit fugit? Soluta
          repellat aspernatur ad molestias, doloremque, blanditiis
          necessitatibus, sit quae vero amet facilis fugiat odio inventore hic
          architecto officiis maiores corporis! Soluta vero maiores voluptas
          autem eveniet aut quod labore doloribus, quaerat nulla iste numquam
          nobis dicta dolores minus minima magni atque quas ut consequatur!
          Officia fuga culpa nulla qui ab ullam repellendus obcaecati. Quasi
          repellat quod omnis dolore cumque, nostrum quos aliquid quas porro
          exercitationem pariatur ex. Voluptatibus, vitae possimus. Eligendi
          pariatur maxime asperiores fugit quisquam sit ab ullam, ex incidunt
          reiciendis cumque explicabo quis!
        </p>
      </div>
    </div>
  );
}

export default Vue;
