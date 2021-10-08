

// typing texi effect
async function init () {
  const node = document.querySelector("#type-text")

  await sleep(1000)
  node.innerText = ""
  await node.type("I'm ")


  while (true) {

    await node.type("a Developer")
    await sleep(2000)
    await node.delete("a Developer")

    await node.type("a Blogger")
    await sleep(2000)
    await node.delete("a Blogger")

    await node.type("a Musician")
    await sleep(2000)
    await node.delete("a Musician")

  }
}


const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }

  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }

  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


var scrolBtn = document.querySelector("#myDIV");
      window.addEventListener("scroll", function () {
        let offset;
        offset = window.pageYOffset;
        if (offset > 300) {
          scrolBtn.style.display = "block";
        }
        if (offset < 300) {
          scrolBtn.style.display = "none";
        }
      });

init()

// .............................................................................................
