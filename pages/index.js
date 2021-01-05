function Home() {
    return (
        <div>
        <h1>Danilo Araujo Sutier  2020</h1>
        <p>HOME PAGE AQUI!</p>

     <div class="main">
      <div class="circle red"></div>
      <div class="circle yellow"></div>
      <div class="circle blue"></div>
      <div class="circle green"></div>
      <div class="circle red"></div>
      <div class="circle yellow"></div>
      <div class="circle blue"></div>
      <div class="circle green"></div>
    </div>
    <div class="utilities">
      <div class="title">
        <h1 id="title">Christmas Lights</h1>
      </div>
      <div class="buttons">
        <button id="play">On</button>
        <button id="stop">Off</button>
        <label for="">Speed:</label>
         <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="From 1 until 5 only." value="">
         <input type="submit" id="submit" name="" value="RUN" onclick="convert()">
      </div>
    </div>
        </div>
    )
}

export default Home