<template>

  <!-- 
1. 가능한 유틸리티 클래스 수를 최소화
2. 디자인 토근을 그룹화 하고 의미적으로 이름을 지정하는 등 팀 내에서 코드 규칙을 공식화 하지 말기
3. 일관된 클래스 순서를 구현하고 린터를 설정하여 깨끗한 코드 보장
4. 번들 크기 최소화 
   => 필요한 스타일만 포함했는지 확인하고 프로덕션 빌드용 최종  CSS는 항상 최소화로 유지
5. 적절한 경우 컴포넌트에 대해 미리 정의된 변형 세트를 정의. 
   => 이는 컴포텉느 뷰의 불일치 밀 스타일 재정의 문재를 방지하는데 도움

모든 클래스는 구성요소 계층의 클래스, 마지막은 유틸리티 계층 클래스 정렬 => container mx-auto px-6
유틸리티 클래스는 전체에서 부분으로 => p-4 pt-2
대략적으로 박스 모델을 기반.
처음에는 레이아웃에 영향을 미티는 영향력이 큰 클래스 배치. 
마지막은 장식 클래스 배치와 유틸리티도 함께 유지 
   => ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md
hover:및 같은 수정자는 focus:함께 그룹화되고 일반 유틸리티 다음에 정렬 
   => scale-125 opacity-50 hover:scale-150 hover:opacity-75
md:및 와 같은 반응형 수정자는 lg:테마에서 구성한 것과 동일한 순서로 마지막에 함께 그룹화.
기본적으로 가장 작은 것부터 가장 큰 것으로
   => grid grid-cols-2 sm:grid-cols-3 lg:grid-col-4
Tailwind 플러그인에서 제공되지 않는 맞춤 클래스(예: 타사 라이브러리를 대상으로 하는 클래스)는
항상 맨 앞에 정렬. 쉽게 확인 가능하게
   => select2-dropdown p-3 shadow-1

  -->
  <div class="flex w-full h-full">
    <!-- side bar -->
    <aside class="w-[400px] h-full text-white  bg-gray-200" v-show="showSide">
      <header class="h-[50px] bg-gray-900 flex justify-center items-center">
        <h1 class="font-pretendard font-bold text-xl">Admin Dashboard</h1>
      </header>

      <div class="h-[calc(100vh-50px)] p-5 bg-gray-800">
        <nav class="flex flex-col justify-between h-full space-y-2.5">
          <ul class="flex flex-col space-y-2.5">
            <li>
              <router-link to="/home" class="inline-flex relative items-center py-2.5 px-2.5 w-full text-white hover:text-gray-800 hover:bg-gray-200 rounded-md">
                <svg class="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/profile" class="inline-flex relative items-center py-2.5 px-2.5 w-full text-white hover:text-gray-800 hover:bg-gray-200 rounded-md">
                <svg class="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                Profile
              </router-link>
            </li>
            <li>
              <router-link to="/message" class="inline-flex relative items-center py-2.5 px-2.5 w-full text-white hover:text-gray-800 hover:bg-gray-200 rounded-md">
                <svg svg class="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
                </svg>
                Message
              </router-link>
            </li>
            <li>
              <router-link to="/download" class="inline-flex relative items-center py-2.5 px-2.5 w-full text-white hover:text-gray-800 hover:bg-gray-200 rounded-md">
                <svg class="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download
              </router-link>
            </li>
          </ul>

          <div class="h-[50px]">
            <router-link to="/profile" class="inline-flex relative items-center py-2.5 px-2.5 w-full text-white hover:text-gray-800 hover:bg-gray-200 rounded-md">
              <svg class="mr-2 w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              Help
            </router-link>
          </div>
        </nav>
      </div>
    </aside>

    <!-- main -->
    <div class="w-full h-full">
      <div class="h-[50px] w-full flex items-center px-5 shadow-sm bg-gray-100 border-b z-10">
        <!-- hambuger menu -->
        <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
          <svg v-show="showSide" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-show="!showSide" class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <div class="w-[calc(100%-30px)] flex">
          <!-- search -->
          <div class="w-[calc(100%-200px)] flex justify-center">
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="flex items-center absolute inset-y-0 left-0 pl-3 pointer-events-none">
                  <svg class="w-5 h-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg" />
                  <router-link to="/" class="flex items-center absolute inset-y-0 right-0 pr-3">
                    <svg class="w-5 h-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                    </svg>
                  </router-link>
                </div>
              </div>
            </form>
          </div>
          <!-- user -->
          <div class="w-[200px]">
            <div class="flex items-center space-x-4" @click="toggleDrop">
              <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://picsum.photos/id/996/100/100" />
              <div class="font-semibold text-left">
                <p>Madana, Dev OP</p>
                <p class="text-xs text-gray-500">Admin</p>
              </div>
            </div>

            <div v-show="showDropDwon" class="absolute right-5 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <ul class="py-1" role="none">
                <li class="text-sm text-left">
                  <a href="" class="text-gray-700 block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                </li>
                <li class="text-sm text-left">
                  <a href="" class="text-gray-700 block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                </li>
                <li class="text-sm text-left">
                  <a href="" class="text-gray-700 block px-4 py-2" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                </li>
              </ul>
              <ul class="py-1" role="none">
                <li class="text-sm text-left">
                  <form method="POST" action="#" role="none">
                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left" role="menuitem" tabindex="-1" id="menu">logout</button>
                  </form>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div class="h-[calc(100vh-50px)] bg-gray-50 p-5 overflow-auto">
        <div class="border rounded-md h-100 p-5 bg-white">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSide: true,
      showDropDwon: false
    }
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide
    },
    toggleDrop() {
      this.showDropDwon = !this.showDropDwon
    }
  }
}
</script>

<style></style>