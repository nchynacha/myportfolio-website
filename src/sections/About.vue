<template>
    <section id="about"
        class="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center gap-8 px-5 pt-10">
        <div class="w-full flex flex-col items-center justify-center gap-8 px-8 mb-4 ">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Get to Know Me</h1>
            <div id="terminal" class="w-full max-w-2xl border border-dark rounded-lg shadow-2xl overflow-hidden">

                <div class="terminal-header p-3 flex items-center">
                    <div class="flex space-x-2">
                        <div class="w-3 h-3 rounded-full bg-red-500"></div>
                        <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div class="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div class="flex-grow text-center text-sm text-gray-400">/home/nachanan/about_me</div>
                </div>

                <div id="terminal-body" ref="terminalBody" class="p-4 sm:p-6 text-sm sm:text-base overflow-y-auto ">
                    <div id="output" ref="outputEl" class="text-secondary"></div>
                </div>
            </div>
        </div>


        <div class="flex flex-col w-full items-center justify-center text-secondary px-8">
            <h1 class="text-secondary text-2xl font-extrabold mb-2">My Skills</h1>

            <!-- ================= 1. Frontend Languages ================= -->
            <div class="flex items-center w-full max-w-md ">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="px-4 text-sm md:text-base font-bold">Frontend Languages</span>
                <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-4">
                <!-- HTML -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
                        <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                        <path fill="#FFF"
                            d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z">
                        </path>
                        <path fill="#EEE"
                            d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">HTML</div>
                </div>

                <!-- CSS -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5z"></path>
                        <path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
                        <path fill="#FFF"
                            d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21z">
                        </path>
                        <path fill="#EEE"
                            d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">CSS</div>
                </div>

                <!-- JavaScript -->
                <div class="flex flex-col items-center">
                    <img :src="JSLogo" alt="JavaScript Logo" class="w-10 h-10 sm:w-12 sm:h-12" />
                    <div class="text-sm mt-1">JavaScript</div>
                </div>
            </div>

            <!-- ================= 2. Frameworks & Libraries ================= -->
            <div class="flex items-center w-full max-w-md ">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="px-4 text-sm md:text-base font-bold">Frameworks & Libraries</span>
                <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-4">
                <!-- Vue.js -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <polygon fill="#81c784" points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon>
                        <polygon fill="#455a64" points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8">
                        </polygon>
                    </svg>
                    <div class="text-sm mt-1">Vue.js</div>
                </div>

                <!-- Tailwind -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#00acc1" d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 
          c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598
          c-2.4,3.199-5.2,4.399-8.4,3.6c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604z
          M12,24c-6.4,0-10.4,3.199-12,9.598c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246
          c2.353,2.388,5.077,5.152,11.025,5.152c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599
          c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">Tailwind</div>
                </div>

                <!-- Flutter -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"></polygon>
                        <polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"></polygon>
                        <rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4"
                            transform="rotate(-45.001 21 33)"></rect>
                        <polygon fill="#01579b" points="38,44 26,44 21,39 27,33"></polygon>
                        <polygon fill="#084994" points="21,39 30,36 27,33"></polygon>
                    </svg>
                    <div class="text-sm mt-1">Flutter</div>
                </div>
            </div>

            <!-- ================= 3. Programming Languages ================= -->
            <div class="flex items-center w-full max-w-md ">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="px-4 text-sm md:text-base font-bold">Programming Languages</span>
                <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-4">
                <!-- Dart -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#1565c0" d="M10,12l3,25l-8.019-8.019c-1.189-1.189-1.508-2.996-0.796-4.52L10,12z">
                        </path>
                        <path fill="#42a5f5" d="M27.319,6.319C26.474,5.474,25.329,5,24.135,5c-0.745,0-1.479,0.185-2.135,0.538L10,12v20.343 
          c0,1.061,0.421,2.078,1.172,2.828L13,37h22v-5l7-11L27.319,6.319z"></path>
                        <path fill="#1565c0" d="M10,12h21.343c1.061,0,2.078,0.421,2.828,1.172L42,21v16h-7L10,12z">
                        </path>
                        <polygon fill="#85cbf8" points="35,37 13,37 19,43 35,43"></polygon>
                    </svg>
                    <div class="text-sm mt-1">Dart</div>
                </div>
            </div>

            <!-- ================= 4. Tools & IDEs ================= -->
            <div class="flex items-center w-full max-w-md ">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="px-4 text-sm md:text-base font-bold">Tools & IDEs</span>
                <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4 mb-4">
                <!-- VS Code -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#29b6f6"
                            d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z">
                        </path>
                        <path fill="#0277bd"
                            d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z">
                        </path>
                        <path fill="#0288d1"
                            d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">VSCode</div>
                </div>
                <div class="flex flex-col items-center"> <svg xmlns="http://www.w3.org/2000/svg"
                        class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#37474f" d="M18.125,7L18,15H5c0,0,0-2.567,0-4.5S6.567,7,8.5,7S18.125,7,18.125,7z">
                        </path>
                        <path fill="#00e676"
                            d="M30.009,5.627l1.85-3.117c0.282-0.475,0.125-1.089-0.349-1.371c-0.475-0.283-1.088-0.125-1.371,0.349 l-1.945,3.276C26.889,4.276,25.478,4,24,4s-2.889,0.276-4.195,0.765L17.86,1.489c-0.282-0.474-0.895-0.632-1.371-0.349 c-0.475,0.282-0.631,0.896-0.349,1.371l1.85,3.117c-3.301,1.92-5.608,5.362-5.94,9.373H35.95 C35.618,10.989,33.311,7.547,30.009,5.627z">
                        </path>
                        <circle cx="19" cy="10" r="1" fill="#fff"></circle>
                        <circle cx="29" cy="10" r="1" fill="#fff"></circle>
                        <path fill="#448aff"
                            d="M39.5,14c-0.494,0-30.14,0-31,0C6.567,14,5,12.433,5,10.5c0,0.001,0,25.067,0,27S6.567,41,8.5,41 C9.36,41,43,41,43,41s0-21.567,0-23.5S41.433,14,39.5,14z">
                        </path>
                        <path fill="#37474f"
                            d="M39.5,21c-0.342,0-0.871,0-1.5,0v25.875c0.629,0,1.158,0,1.5,0c1.933,0,3.5-1.567,3.5-3.5 S43,17.5,43,17.5C43,19.433,41.433,21,39.5,21z">
                        </path>
                        <path fill="#37474f"
                            d="M33.768,44.061l-7.444-15.819C27.335,27.515,28,26.337,28,25c0-1.858-1.28-3.411-3-3.858V19 c0-0.552-0.448-1-1-1s-1,0.448-1,1v2.142c-1.72,0.447-3,2-3,3.858c0,1.337,0.665,2.515,1.676,3.242l-7.44,15.811 c-0.424,0.901-0.201,2.025,0.62,2.588c1.047,0.718,2.437,0.309,2.954-0.79l4.643-9.866c0.616-1.309,2.479-1.309,3.095,0l4.643,9.866 C30.531,46.576,31.25,47,32.001,47c0.411,0,0.832-0.128,1.203-0.402C33.982,46.024,34.18,44.936,33.768,44.061z M24,23 c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S22.897,23,24,23z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">Android Studio</div>
                </div>
            </div>

            <!-- ================= 5. Version Control ================= -->
            <div class="flex items-center w-full max-w-md ">
                <div class="flex-1 h-px bg-gray-300"></div>
                <span class="px-4 text-sm md:text-base font-bold">Version Control</span>
                <div class="flex-1 h-px bg-gray-300"></div>
            </div>
            <div class="flex flex-wrap justify-center gap-4">
                <!-- Git -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#F4511E"
                            d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1
          c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3
          s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3
          c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24
          c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3C42.7,23.3,42.7,22.6,42.2,22.1z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">Git</div>
                </div>

                <!-- GitHub -->
                <div class="flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
                        <path fill="#000000" d="M24,4C12.954,4,4,12.954,4,24c0,8.89,5.789,16.444,13.82,19.094c1.011,0.186,1.38-0.439,1.38-0.975 
          c0-0.482-0.018-1.76-0.027-3.452c-5.621,1.223-6.81-2.709-6.81-2.709C11.091,33.19,9.906,32.6,9.906,32.6
          c-1.833-1.254,0.138-1.228,0.138-1.228c2.028,0.143,3.096,2.082,3.096,2.082c1.802,3.09,4.729,2.197,5.884,1.68
          c0.182-1.305,0.705-2.197,1.282-2.705c-4.488-0.511-9.205-2.244-9.205-9.98c0-2.206,0.789-4.007,2.082-5.421
          c-0.209-0.511-0.903-2.566,0.199-5.348c0,0,1.697-0.542,5.556,2.07c1.613-0.449,3.341-0.673,5.058-0.682
          c1.717,0.009,3.445,0.233,5.059,0.682c3.858-2.612,5.553-2.07,5.553-2.07c1.104,2.782,0.411,4.837,0.202,5.348
          c1.296,1.414,2.083,3.215,2.083,5.421c0,7.757-4.725,9.462-9.225,9.966c0.727,0.626,1.373,1.866,1.373,3.762
          c0,2.713-0.025,4.899-0.025,5.566c0,0.541,0.366,1.168,1.389,0.97C38.216,40.437,44,32.884,44,24
          C44,12.954,35.046,4,24,4z">
                        </path>
                    </svg>
                    <div class="text-sm mt-1">GitHub</div>
                </div>
            </div>
        </div>




    </section>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import JSLogo from '../assets/javascript.png'

const outputEl = ref(null)
const terminalBody = ref(null)

const content = {
    'system.status': {
        title:
            "// [ NACHANAN ] Access Log: About Me\n$ system.status = 'Scanning, Processing, Executing...';",
        body: "Hello! I'm Nachanan, an aspiring **Frontend Developer** dedicated to bridging the gap between design concepts and seamless digital reality. My journey began with a deep curiosity about how smooth, responsive user experiences (UX) are built—not just what they look like, but how efficiently they run across different environments.\n\nI thrive in the space where logic meets aesthetics, constantly learning and growing my skill set to tackle modern web and mobile development challenges."
    }
}

function formatText(text) {
    return text
        .replace(/\*\*(.*?)\*\*/g, '<span class="text-[#8BC34A] font-bold">$1</span>')
        .replace(/\n/g, '<br>')
}

function typeWriter(element, text, index = 0, callback = () => { }) {
    if (index < text.length) {
        element.innerHTML = formatText(text.substring(0, index + 1))
        terminalBody.value.scrollTop = terminalBody.value.scrollHeight
        setTimeout(() => typeWriter(element, text, index + 1, callback), 10)
    } else {
        callback()
    }
}

onMounted(() => {
    const initialCommand = 'system.status'
    const commandData = content[initialCommand]

    const titleEl = document.createElement('div')
    titleEl.className = 'whitespace-pre-wrap output-header my-2'
    outputEl.value.appendChild(titleEl)

    typeWriter(titleEl, commandData.title, 0, () => {
        const bodyEl = document.createElement('div')
        bodyEl.className = 'mb-4'
        outputEl.value.appendChild(bodyEl)

        const caretEl = document.createElement('span')
        caretEl.className = 'caret'
        bodyEl.appendChild(caretEl)

        typeWriter(bodyEl, commandData.body, 0, () => {
            caretEl.style.animation = 'none'
            caretEl.style.backgroundColor = 'transparent'
        })
    })
})
</script>

<style>
.caret {
    display: inline-block;
    width: 8px;
    height: 16px;
    animation: blink 0.7s steps(1) infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.output-header {
    color: #8BC34A;

    font-family: monospace;
    white-space: pre-wrap;
}
</style>