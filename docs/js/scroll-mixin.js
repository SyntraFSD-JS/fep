const scroller = component => {
  component.screen.scrollPos = window.scrollY;
};

const scrollMixin = {
  data() {
    return {
      screen: { scrollPos: 0, scrollHeight: 1024, width: 768, height: 1024 },
    };
  },
  mounted() {
    this.handleScroll();
    this.screen.width = window.innerWidth;
    this.screen.height = window.innerHeight;
    this.screen.scrollHeight = document.body.clientHeight - window.innerHeight;
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      scroller(this);
    },
  },
};

export { scroller, scrollMixin };
