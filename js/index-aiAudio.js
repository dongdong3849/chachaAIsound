(function(){



    

    let isAudioEnabled = false;  // 오디오 활성화 여부를 위한 플래그

    // AI 버튼에 대한 마우스 호버 오디오
    const aiButton = document.getElementById('aiButton');
    const aiButtonAudio = new Audio(aiButton.getAttribute('data-audio'));

    // AI 버튼에 마우스가 호버될 때 항상 오디오 재생
    aiButton.addEventListener('mouseenter', () => {
        aiButtonAudio.play();
    });

    // AI 버튼에서 마우스가 떠날 때 오디오 정지
    aiButton.addEventListener('mouseleave', () => {
        aiButtonAudio.pause();
        aiButtonAudio.currentTime = 0;
    });

    // AI 버튼 클릭 시 오디오 활성화/비활성화
    aiButton.addEventListener('click', () => {
        isAudioEnabled = !isAudioEnabled; // 버튼을 누르면 활성화/비활성화 토글
        aiButton.textContent = isAudioEnabled ? 'Deactivate AI Sound' : 'Activate AI Sound';
    });

    // 모든 hoverDiv를 선택
    const hoverDivs = document.querySelectorAll('.hoverAi');

    hoverDivs.forEach(div => {
        // 각 div에 마우스 엔터 이벤트 추가
        div.addEventListener('mouseenter', () => {
            if (isAudioEnabled) {  // 오디오 활성화 여부 확인
                const audio = new Audio(div.getAttribute('data-audio'));
                audio.play();  // 오디오 재생
                
                // 마우스가 빠져나갈 때 오디오 중지
                div.addEventListener('mouseleave', () => {
                    audio.pause();
                    audio.currentTime = 0; // 오디오 처음으로 돌림
                });
            }
        });
    });


});
