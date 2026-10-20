 document.addEventListener('DOMContentLoaded', function() {
            // Inicializar Animación de Contadores de Estadísticas
            initCounters();

            // Configurar Scroll listener para Navbar y botón Scroll Top
            window.addEventListener('scroll', handleScrollEvents);

            // Escuchar movimiento del mouse para la Demo M4 (JS DOM)
            const mouseArea = document.getElementById('mouseArea');
            if(mouseArea) {
                mouseArea.addEventListener('mousemove', function(e) {
                    const rect = mouseArea.getBoundingClientRect();
                    document.getElementById('mouseX').textContent = Math.round(e.clientX - rect.left);
                    document.getElementById('mouseY').textContent = Math.round(e.clientY - rect.top);
                });
            }
        });

        // 1. Contador Animado (Hero Stats)
        function initCounters() {
            const counters = document.querySelectorAll('.counter');
            counters.forEach(counter => {
                const target = +counter.getAttribute('data-target');
                let count = 0;
                const speed = target / 50;

                const updateCount = () => {
                    count += speed;
                    if(count < target) {
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 30);
                    } else {
                        counter.innerText = target + (target === 98 ? '%' : '+');
                    }
                };
                updateCount();
            });
        }

        // 2. Control de Desplazamiento (Scroll Events)
        function handleScrollEvents() {
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            const navbar = id = document.getElementById('mainNavbar');

            if (window.scrollY > 200) {
                scrollTopBtn.classList.add('show');
                navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
            } else {
                scrollTopBtn.classList.remove('show');
                navbar.style.boxShadow = "none";
            }
        }

        function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // 3. Cambiador de Demos del Sílabo
        function switchSyllabusDemo(demoId, btnElement) {
            // Desactivar todos los botones
            document.querySelectorAll('.syllabus-tab-btn').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');

            // Ocultar todas las demos
            document.querySelectorAll('.syllabus-demo-content').forEach(demo => demo.classList.add('d-none'));
            
            // Mostrar la demo seleccionada
            const selectedDemo = document.getElementById('demo-' + demoId);
            if(selectedDemo) {
                selectedDemo.classList.remove('d-none');
            }
        }

        // 4. Demo M1: Timing Easing Tester
        function playTiming(easingFunc) {
            const box = document.getElementById('timingBox');
            box.style.transition = 'none';
            box.style.transform = 'translateX(-100px)';

            setTimeout(() => {
                box.style.transition = `transform 1s ${easingFunc}`;
                box.style.transform = 'translateX(100px)';
            }, 50);
        }

        // 5. Demo M5: Animación SVG con GSAP
        function animateSVG() {
            const circle = document.getElementById('svgCircle');
            if (typeof gsap !== 'undefined') {
                gsap.fromTo(circle, 
                    { strokeDashoffset: 251, rotation: 0 },
                    { strokeDashoffset: 0, rotation: 360, transformOrigin: '50% 50%', duration: 1.5, ease: 'power2.inOut' }
                );
            }
        }

        // 6. Filtros Interactivos de Cursos
        function filterCourses(category, btnElement) {
            document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
            btnElement.classList.add('active');

            const items = document.querySelectorAll('.course-item');
            items.forEach(item => {
                if(category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // 7. Modal de Detalles de Curso
        function openCourseModal(title, teacher, price, desc) {
            document.getElementById('modalCourseTitle').textContent = title;
            document.getElementById('modalCourseTeacher').textContent = 'Docente: ' + teacher;
            document.getElementById('modalCoursePrice').textContent = price;
            document.getElementById('modalCourseDesc').textContent = desc;

            const modal = new bootstrap.Modal(document.getElementById('courseDetailModal'));
            modal.show();
        }

        // 8. Validación de Newsletter
        function handleNewsletter(e) {
            e.preventDefault();
            const emailInput = document.getElementById('newsletterEmail');
            const feedback = document.getElementById('newsletterFeedback');

            if (emailInput.checkValidity()) {
                feedback.className = "small mt-2 text-success";
                feedback.textContent = "¡Gracias por suscribirte al boletín de EduAnimates!";
                emailInput.value = "";
            } else {
                feedback.className = "small mt-2 text-danger";
                feedback.textContent = "Por favor ingresa un correo electrónico válido.";
            }
        }

        // 9. Manejador Genérico de Formularios de Demostración y Notificaciones Custom
        function handleDemoSubmit(e, message) {
            e.preventDefault();
            
            // Cerrar cualquier modal abierto
            const modals = document.querySelectorAll('.modal.show');
            modals.forEach(modalEl => {
                const modalInstance = bootstrap.Modal.getInstance(modalEl);
                if(modalInstance) modalInstance.hide();
            });

            // Mostrar Custom Toast Notification
            showToast(message);
        }

        function showToast(message) {
            const toastEl = document.getElementById('customToast');
            document.getElementById('toastMessage').textContent = message;
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }