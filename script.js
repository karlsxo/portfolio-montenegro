
        document.addEventListener('DOMContentLoaded', () => {
            // Bubbly Text Effect for Name
            const bubblyText = document.querySelector('.bubbly-text');
            const textContent = bubblyText.innerHTML.replace(/<br>/g, '\n'); 
            bubblyText.innerHTML = '';

            textContent.split('').forEach(char => {
                if (char === '\n') {
                    const br = document.createElement('br');
                    bubblyText.appendChild(br);
                } else {
                    const span = document.createElement('span');
                    span.textContent = char;
                    bubblyText.appendChild(span);
                }
            });

            // Continuous Typing Text Effect
            const phrases = [
                "You can't spell awesome without ME",
                "Building digital experiences",
                "Creating innovative solutions",
                "Transforming ideas into reality"
            ];
            
            let currentPhraseIndex = 0;
            let currentCharIndex = 0;
            let isDeleting = false;
            let typewriterElement = document.getElementById('typewriter');
            
            function typeWriter() {
                const currentPhrase = phrases[currentPhraseIndex];
                
                if (!isDeleting) {
                    // Typing
                    if (currentCharIndex < currentPhrase.length) {
                        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
                        currentCharIndex++;
                        setTimeout(typeWriter, 100); // Typing speed
                    } else {
                        // Finished typing, wait before deleting
                        setTimeout(() => {
                            isDeleting = true;
                            typeWriter();
                        }, 2000); // Wait time before deleting
                    }
                } else {
                    // Deleting
                    if (currentCharIndex > 0) {
                        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
                        currentCharIndex--;
                        setTimeout(typeWriter, 50); // Deleting speed (faster)
                    } else {
                        // Finished deleting, move to next phrase
                        isDeleting = false;
                        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                        setTimeout(typeWriter, 500); // Wait time before typing next phrase
                    }
                }
            }
            
            // Start the typewriter effect
            typeWriter();
        });
