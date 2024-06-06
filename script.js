        document.querySelectorAll('.tabs a').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelectorAll('.content').forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(this.getAttribute('data-target')).classList.add('active');
            });
        });
