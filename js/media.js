let photos = [
  "/img/image01.jpg",
  "/img/image02.jpg",
  "/img/image03.jpg",
  "/img/image04.jpg",
  "/img/image05.jpg",
];

let videos = [
  {
    thumb: "/img/video01.webp",
    html: `<iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/dNGpbQu_voY?rel=0&autoplay=1" title=${this.title} frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>`,
    title: 'Carlos de Seixas "Giga"',
  },
  {
    thumb: "/img/video02.webp",
    html: `<iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/EOSCCSnooLs?rel=0&autoplay=1" title=${this.title} frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>`,
    title: "Glinka Polka",
  },
  {
    thumb: "/img/video03.webp",
    html: `<iframe class="w-full aspect-[16/9]" src="https://www.youtube.com/embed/XuAfAynq_Yw?rel=0&autoplay=1" title=${this.title} frameborder="0" allow="autoplay; picture-in-picture" allowfullscreen></iframe>`,
    title:
      "Bach Invention in F major, Tchaikovsky Sweet Dreams, Hammond ChangingTimes",
  },
];

document.addEventListener("alpine:init", () => {
  Alpine.data("modal", () => ({
    open: false,
    selected: 0,
    photos: photos,
    toggle(i) {
      if (window.screen.width >= 640) {
        this.open = true;
        this.selected = i;
        window.setTimeout(() => this.scroll(), 0);
        // this.scroll();
        return;
      }
    },
    scroll() {
      this.$refs.container.scrollTo({
        top: 0,
        left: this.selected * 752,
        behavior: "instant",
      });
    },
    onscroll() {
      window.setTimeout(
        () =>
          (this.selected = Math.floor(
            this.$refs.container.scrollLeft /
              (this.$refs.container.getBoundingClientRect().width - 16)
          )),
        0
      );
    },
    next() {
      // console.log(this.$refs.container.getBoundingClientRect().width);
      this.$refs.container.scrollTo({
        top: 0,
        left:
          (this.selected + 1) *
          (this.$refs.container.getBoundingClientRect().width - 16),
        behavior: "smooth",
      });
      this.selected = this.selected + 1;
    },
    previous() {
      this.$refs.container.scrollTo({
        top: 0,
        left:
          (this.selected - 1) *
          (this.$refs.container.getBoundingClientRect().width - 16),
        behavior: "smooth",
      });
      this.selected = this.selected - 1;
    },
  }));
  Alpine.data("video_modal", () => ({
    open: false,
    play: false,
    selected: undefined,
    videos: videos,
    toggle(i) {
      this.selected = i;
      if (window.innerWidth >= 640) {
        this.open = true;
        return;
      }
      this.play = true;
      return;
    },
  }));
});
