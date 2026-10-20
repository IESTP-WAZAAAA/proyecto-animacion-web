document.addEventListener('DOMContentLoaded', function () {
    initCounters();
    window.addEventListener('scroll', handleScrollEvents);
    const mouseArea = document.getElementById('mouseArea');
    if (mouseArea) {
        mouseArea.addEventListener('mousemove', function (e) {
            const rect = mouseArea.getBoundingClientRect();
            document.getElementById('mouseX').textContent = Math.round(e.clientX - rect.left);
            document.getElementById('mouseY').textContent = Math.round(e.clientY - rect.top);
        });
    }
});

function initCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
            count += speed;
            if (count < target) {
                counter.innerText = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                counter.innerText = target + (target === 98 ? '%' : '+');
            }
        };
        updateCount();
    });
}

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

function switchSyllabusDemo(demoId, btnElement) {
    document.querySelectorAll('.syllabus-tab-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    document.querySelectorAll('.syllabus-demo-content').forEach(demo => demo.classList.add('d-none'));

    const selectedDemo = document.getElementById('demo-' + demoId);
    if (selectedDemo) {
        selectedDemo.classList.remove('d-none');
    }
}

function playTiming(easingFunc) {
    const box = document.getElementById('timingBox');
    box.style.transition = 'none';
    box.style.transform = 'translateX(-100px)';

    setTimeout(() => {
        box.style.transition = `transform 1s ${easingFunc}`;
        box.style.transform = 'translateX(100px)';
    }, 50);
}

function animateSVG() {
    const circle = document.getElementById('svgCircle');
    if (typeof gsap !== 'undefined') {
        gsap.fromTo(circle,
            { strokeDashoffset: 251, rotation: 0 },
            { strokeDashoffset: 0, rotation: 360, transformOrigin: '50% 50%', duration: 1.5, ease: 'power2.inOut' }
        );
    }
}

function filterCourses(category, btnElement) {
    document.querySelectorAll('.btn-filter').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const items = document.querySelectorAll('.course-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function openCourseModal(title, teacher, price, desc) {
    document.getElementById('modalCourseTitle').textContent = title;
    document.getElementById('modalCourseTeacher').textContent = 'Docente: ' + teacher;
    document.getElementById('modalCoursePrice').textContent = price;
    document.getElementById('modalCourseDesc').textContent = desc;

    const modal = new bootstrap.Modal(document.getElementById('courseDetailModal'));
    modal.show();
}

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

function handleDemoSubmit(e, message) {
    e.preventDefault();
    const modals = document.querySelectorAll('.modal.show');
    modals.forEach(modalEl => {
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        if (modalInstance) modalInstance.hide();
    });

    showToast(message);
}

function showToast(message) {
    const toastEl = document.getElementById('customToast');
    document.getElementById('toastMessage').textContent = message;
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}