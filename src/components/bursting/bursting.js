import mojs from "@mojs/core";

const COLORS = {
  RED: "#FD5061",
  YELLOW: "#FFCEA5",
  BLACK: "#29363B",
  WHITE: "white",
  VINOUS: "#A50710",
};

const burst = new mojs.Burst({
  left: 0,
  top: 0,
  radius: { 4: 32 },
  angle: 45,
  count: 24,
  children: {
    radius: 2.5,
    fill: "#FD7932",
    scale: { 1: 0, easing: "quad.in" },
    pathScale: [0.8, null],
    degreeShift: [13, null],
    duration: [500, 700],
    easing: "quint.out",
  },
});

const burst1 = new mojs.Burst({
  left: 0,
  top: 0,
  count: 27,
  radius: { 50: 250 },
  children: {
    fill: "white",
    shape: "line",
    stroke: [COLORS.WHITE, COLORS.VINOUS],
    strokeWidth: 12,
    radius: "rand(30, 60)",
    radiusY: 0,
    scale: { 1: 0 },
    pathScale: "rand(.5, 1)",
    degreeShift: "rand(-360, 360)",
    isForce3d: true,
  },
});

const Burst = document.addEventListener("click", function (e) {
  burst1.tune({ x: e.pageX, y: e.pageY }).generate().replay();
  const coords = { x: e.pageX, y: e.pageY };
  burst.tune(coords).replay();
});

export default Burst;
