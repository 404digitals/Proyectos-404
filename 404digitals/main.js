// CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cursor.style.left=mx-5+'px'; cursor.style.top=my-5+'px'; });
  function animRing(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.left=rx-18+'px'; ring.style.top=ry-18+'px'; requestAnimationFrame(animRing); }
  animRing();

  // SCROLL REVEAL
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e,i) => { if(e.isIntersecting) setTimeout(()=>e.target.classList.add('visible'), (i%4)*80); });
  }, {threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  // FAQ
  function toggleFaq(el) {
    const item = el.parentElement;
    const open = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!open) item.classList.add('open');
  }

// Make.com form handling via iframe
function formEnviado() {
  const btn = document.getElementById('formBtn');
  const success = document.getElementById('formSuccess');
  
  // Show loading state
  btn.textContent = 'Enviando...';
  btn.disabled = true;
  
  // Listen for iframe load (form submission complete)
  const iframe = document.getElementById('hidden_iframe');
  const originalSrc = iframe.src;
  iframe.onload = function() {
    // Hide form, show success
    document.getElementById('contactForm').style.display = 'none';
    success.style.display = 'block';
  };
}

  // CHATBOT - Local Knowledge Base for 404 Digitals (No API needed)
  const chatbotKnowledge = {
    '404digitals': {
      name: '404 Digitals',
      keywords: ['404', 'digitals', 'web', 'website', 'desarrollo', 'seo', 'digital', 'oviedo', 'asturias', 'servicio', 'servicios', 'precio', 'precios', 'tarifa', 'contacto', 'ubicacion', 'direccion', 'horario', 'plazo', 'tarda', 'proceso', 'entrega'],
      info: {
        // SERVICES
        services: '🌐 **Webs y Landing Pages** (desde 490€): Diseño y desarrollo a medida, pensadas para convertir visitantes en clientes.\n\n📈 **SEO Local** (A medida): Estrategia SEO enfocada en resultados medibles y duraderos. Aparición en Google cuando tus clientes te buscan.\n\n🤖 **Automatizaciones e IA** (A medida): Chatbots inteligentes, flujos automáticos y herramientas de IA que ahorran horas de trabajo.\n\n🔧 **Mantenimiento Web** (Incluido en el plan): Tu web siempre actualizada, segura y optimizada. Soporte técnico incluido.\n\n📊 **Analítica y Conversión**: Informes claros, tests A/B y optimización continua.\n\n📱 **Redes Sociales y Contenido**: Estrategia de contenido para presencia consistente.',
        
        // PRICING
        prices: '💰 **Planes disponibles:**\n\n🏠 **Básico** - 490€ + 39€/mes\n• Landing page profesional\n• Diseño a medida\n• Responsive móvil\n• Formulario de contacto\n• Integración WhatsApp\n\n⭐ **Profesional** - 690€ + 69€/mes\n• Web completa multi-sección\n• Diseño premium\n• SEO local optimizado\n• Chatbot básico incluido\n• Analytics configurado\n• 1 mes mantenimiento gratis\n\n💎 **Premium** - 900€ + 99€/mes\n• Web avanzada completa\n• Chatbot IA personalizado\n• SEO + contenido mensual\n• Automatizaciones a medida\n• Informes mensuales\n• Soporte prioritario',
        
        // CONTACT
        contact: '📧 **Email:** 404.digitals@gmail.com\n\n📱 **WhatsApp:** +34 654 10 17 80\n\n📞 **Teléfono:** +34 654 10 17 80 (Oviedo, Asturias)\n\n💬 Respondemos en menos de 24 horas',
        
        // LOCATION
        location: '📍 Oviedo, Asturias\n\nTrabajamos con clientes de toda España. Nuestras reuniones son por videollamada y toda la gestión es 100% online.',
        
        // PROCESS
        process: '🔄 **Nuestro proceso (4 pasos):**\n\n1️⃣ **Diagnóstico**: Analizamos tu situación actual, competencia y objetivos. Primera reunión gratuita y sin compromiso.\n\n2️⃣ **Estrategia**: Diseñamos un plan de acción personalizado con plazos, herramientas y métricas de éxito claras.\n\n3️⃣ **Ejecución**: Desarrollamos e implementamos. Te mantenemos informado en cada fase con acceso a seguimiento.\n\n4️⃣ **Optimización**: Medimos resultados, ajustamos y mejoramos continuamente.',
        
        // DELIVERY TIME
        delivery: '⏱️ **Plazos de entrega:**\n\n• Landing page básica: 5-7 días\n• Web completa: 2-3 semanas\n• SEO local: resultados visibles en 2-4 meses\n• Automatizaciones IA: 1-2 semanas',
        
        // METRICS/RESULTS
        metrics: '📊 **Nuestros resultados:**\n\n• +10 proyectos entregados\n• 5★ valoración media\n• 24h tiempo de respuesta\n• 100% clientes satisfechos',
        
        // PORTFOLIO
        portfolio: '',
        
        // TESTIMONIALS
        testimonials: '💬 \n\n"Antes no aparecíamos en Google. Ahora somos los primeros en nuestro sector." - Laura R., Restaurante La Sidra\n\n"La web es profesional, rápida y mis clientes siempre la mencionan." - Marcos S., Taller en Oviedo (cliente Diseño Web)',
        
        // SEO
        seo: '🔍 **SEO Local:**\n\n• Aparición en Google cuando tus clientes te buscan\n• Estrategia enfocada en resultados medibles\n• Resultados visibles en 2-4 meses\n• Diferencia con publicidad de pago: los resultados son duraderos y se acumulan',
        
        // CHATBOT/AI
        chatbot: '🤖 **Chatbots y Automatizaciones:**\n\n• Chatbots inteligentes que entienden preguntas de tus clientes\n• Entrenados con información de tu negocio: precios, servicios, horarios, FAQ\n• Responden con lenguaje natural 24/7\n• Pueden redirigir a WhatsApp o reservas automáticamente\n• Ahorro de horas de trabajo manual cada semana',
        
        // MAINTENANCE
        maintenance: '🔧 **Mantenimiento Web (Incluido en el plan):**\n\n• Actualizaciones de seguridad\n• Copias de seguridad semanales\n• Monitorización de disponibilidad\n• Soporte técnico por email y WhatsApp\n• Pequeños cambios de contenido sin coste adicional',
        
        // FAQ RESPONSES
        faq: {
          web_time: 'Una landing page básica entre 5 y 7 días. Una web completa entre 2 y 3 semanas. Los plazos siempre los confirmamos por escrito antes de empezar.',
          need_content: 'No es necesario. Nosotros te ayudamos con los textos usando IA y te indicamos qué tipo de imágenes necesitamos. Si no tienes fotos, trabajamos con bancos de imágenes profesionales.',
          chatbot_training: 'Sí. Lo entrenamos con la información de tu negocio: precios, servicios, horarios, preguntas frecuentes. Responde con lenguaje natural y puede redirigir a WhatsApp o reserva cuando lo necesite.',
          seo_timing: 'El SEO local suele mostrar resultados visibles entre 2 y 4 meses. Es una inversión a medio plazo, pero los resultados son duraderos y se acumulan.',
          service_area: 'Trabajamos con clientes de toda España. Nuestras reuniones son por videollamada y toda la gestión es 100% online. Eso no afecta a la calidad del trabajo.'
        }
      }
    }
  };

  // Quick reply buttons for 404 Digitals
  const quickReplies = {
    '404digitals': [
      { text: '🌐 Servicios', key: 'services' },
      { text: '💰 Precios', key: 'prices' },
      { text: '📞 Contacto', key: 'contact' },
      { text: '⏱️ Plazos', key: 'delivery' },
      { text: '🔄 Proceso', key: 'process' }
    ]
  };

  let currentBusiness = null;

  function detectBusiness(text) {
    const lowerText = text.toLowerCase();
    
    // Check 404 Digitals keywords
    for (const kw of chatbotKnowledge['404digitals'].keywords) {
      if (lowerText.includes(kw)) return '404digitals';
    }
    
    // Default to 404 Digitals for any query since it's the only business
    return '404digitals';
  }

  function findAnswer(text, business) {
    const lowerText = text.toLowerCase();
    const info = chatbotKnowledge[business].info;
    
    // Price queries
    if (lowerText.includes('precio') || lowerText.includes('cuanto') || lowerText.includes('cuesta') || lowerText.includes('tarifa') || lowerText.includes('coste') || lowerText.includes('plan') || lowestTextIncludes(lowerText, ['cuánto', 'presupuesto'])) {
      return info.prices;
    }
    // Service queries
    if (lowerText.includes('servicio') || lowerText.includes('hacéis') || lowerText.includes('haceis') || lowestTextIncludes(lowerText, ['ofrecen', 'web', 'desarrollo'])) {
      return info.services;
    }
    // Location/address queries
    if (lowerText.includes('dirección') || lowerText.includes('direccion') || lowerText.includes('dónde') || lowerText.includes('donde') || lowerText.includes('ubicación') || lowerText.includes('llegar') || lowestTextIncludes(lowerText, ['dónde', 'asturias', 'oviedo'])) {
      return info.location;
    }
    // Contact/phone queries
    if (lowerText.includes('teléfono') || lowerText.includes('telefono') || lowestTextIncludes(lowerText, ['contacto', 'llamar', 'whatsapp', 'email', 'correo', 'escribir'])) {
      return info.contact;
    }
    // Process queries
    if (lowestTextIncludes(lowerText, ['proceso', 'trabajar', 'cómo trabajan', 'funciona', 'pasos', 'metodología'])) {
      return info.process;
    }
    // Delivery/time queries
    if (lowestTextIncludes(lowerText, ['tiempo', 'plazo', 'tarda', 'cuándo', 'cuando', 'entrega', 'cuánto tarda', 'cuanto tarda'])) {
      return info.delivery;
    }
    // Metrics/results
    if (lowestTextIncludes(lowerText, ['resultado', 'proyecto', 'entregado', 'valoración', 'estrellas', 'reseña', 'opinión', 'cliente'])) {
      return info.metrics;
    }
    // Metrics/results
    if (lowestTextIncludes(lowerText, ['testimonio', 'opinión', 'cliente', 'dicen', 'recomendar'])) {
      return info.testimonials;
    }
    // SEO
    if (lowestTextIncludes(lowerText, ['seo', 'google', 'posicionamiento', 'buscador', 'encontrar'])) {
      return info.seo;
    }
    // Chatbot/AI
    if (lowestTextIncludes(lowerText, ['chatbot', 'automatiz', 'ia', 'inteligente', 'robot', 'automático'])) {
      return info.chatbot;
    }
    // Maintenance
    if (lowestTextIncludes(lowerText, ['mantenimiento', 'soporte', 'actualiz', 'seguridad'])) {
      return info.maintenance;
    }
    // FAQ related
    if (lowestTextIncludes(lowerText, ['pregunta', 'duda', 'faq'])) {
      return info.faq ? 'Tenemos muchas preguntas frecuentes. ¿Cuál es tu duda específica? Puedo ayudarte con: plazos de entrega, contenido necesario, chatbot, SEO o zona de servicio.' : null;
    }
    
    return null;
  }

  function lowestTextIncludes(text, keywords) {
    return keywords.some(kw => text.includes(kw));
  }

  function getDefaultResponse(text) {
    // Try to detect business and provide relevant info
    const detected = detectBusiness(text);
    
    if (detected) {
      currentBusiness = detected;
      const kb = chatbotKnowledge[detected];
      return `¡Hola! 👋 Soy el asistente de ${kb.name}. ¿Sobre qué te gustaría preguntar?`;
    }
    
    // Default welcome - 404 Digitals only
    currentBusiness = '404digitals';
    return '¡Hola! 👋 Soy el asistente de 404 Digitals. ¿En qué puedo ayudarte?';
  }

  function getResponse(text) {
    const lowerText = text.toLowerCase();
    
    // First detect business
    const detected = detectBusiness(text);
    
    if (detected) {
      currentBusiness = detected;
      const answer = findAnswer(text, detected);
      if (answer) return answer;
      
      // Specific greetings/thanks
      if (lowestTextIncludes(lowerText, ['hola', 'buenos', 'buenas', 'hello', 'hi'])) {
        return `¡Hola! 👋 Soy el asistente de ${chatbotKnowledge[detected].name}. ¿En qué puedo ayudarte?`;
      }
      if (lowestTextIncludes(lowerText, ['gracias', 'thank', 'thx'])) {
        return '¡De nada! 😊 ¿Necesitas algo más?';
      }
      if (lowestTextIncludes(lowerText, ['adiós', 'adios', 'bye', 'hasta'])) {
        return '¡Hasta luego! 👋 Si tienes más preguntas, aquí estaré.';
      }
      
      // Default for detected business
return `Tu mensaje no tiene suficiente contexto para el 404 Assistant. ¿Podrías especificar si buscas información sobre precio o algún servicio?`;
    }
    
    // Business switching
    if (currentBusiness && currentBusiness !== detected) {
      const answer = findAnswer(text, currentBusiness);
      if (answer) return answer;
    }
    
    return getDefaultResponse(text);
  }

  let chatOpen = false;
  function toggleChat() {
    chatOpen = !chatOpen;
    document.getElementById('chatbot-window').classList.toggle('open', chatOpen);
    document.getElementById('chatbot-btn').innerHTML = chatOpen
      ? '<div class="pulse"></div>✕'
      : '<div class="pulse"></div>🤖';
    if(chatOpen) document.getElementById('chatInput').focus();
  }

  function handleChatKey(e) { if(e.key==='Enter') sendChatMessage(); }

  function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const msg = input.value.trim();
    if(!msg) return;
    input.value = '';
    addMsg(msg, 'user');

    // Show typing indicator
    const typing = document.createElement('div');
    typing.className = 'chat-typing';
    typing.innerHTML = '<span></span><span></span><span></span>';
    typing.id = 'typing';
    document.getElementById('chatMessages').appendChild(typing);
    scrollChat();

    // Simulate typing delay
    setTimeout(() => {
      document.getElementById('typing')?.remove();
      
      // Get local response (no API needed!)
      const response = getResponse(msg);
      addMsg(response, 'bot');
      
      // Add quick replies if business detected
      if (currentBusiness && quickReplies[currentBusiness]) {
        setTimeout(() => {
          const qrDiv = document.createElement('div');
          qrDiv.className = 'quick-replies';
          qrDiv.style.display = 'flex';
          qrDiv.style.gap = '0.5rem';
          qrDiv.style.flexWrap = 'wrap';
          qrDiv.style.marginTop = '0.5rem';
          
          quickReplies[currentBusiness].forEach(qr => {
            const btn = document.createElement('button');
            btn.textContent = qr.text;
            btn.className = 'qr-btn';
            btn.style.cssText = 'background:rgba(99,179,237,0.1);border:1px solid rgba(99,179,237,0.3);color:#63b3ed;padding:0.4rem 0.8rem;font-size:0.75rem;cursor:pointer;border-radius:4px;transition:all 0.2s;';
            btn.onmouseover = () => { btn.style.background = 'rgba(99,179,237,0.2)'; };
            btn.onmouseout = () => { btn.style.background = 'rgba(99,179,237,0.1)'; };
            btn.onclick = () => {
              document.getElementById('chatInput').value = qr.text;
              sendChatMessage();
            };
            qrDiv.appendChild(btn);
          });
          
          document.getElementById('chatMessages').appendChild(qrDiv);
          scrollChat();
        }, 500);
      }
    }, 800);
  }

  function addMsg(text, type) {
    const div = document.createElement('div');
    div.className = `chat-msg ${type}`;
    div.textContent = text;
    document.getElementById('chatMessages').appendChild(div);
    scrollChat();
  }

  function scrollChat() {
    const msgs = document.getElementById('chatMessages');
    msgs.scrollTop = msgs.scrollHeight;
  }

  // OLD API-BASED CHATBOT (commented out - now using local knowledge base)
  /*
  async function sendChatMessage_OLD() {
    // ... old Anthropic API code ...
  }
  */

  

  // NUMBER COUNTER ANIMATION
  function animateCounters() {
    document.querySelectorAll('.metric-num').forEach(el => {
      const text = el.textContent;
      const num = parseFloat(text.replace(/[^0-9.]/g,''));
      if(!num) return;
      const suffix = text.replace(/[0-9.]/g,'');
      let start = 0;
      const step = num / 60;
      const timer = setInterval(() => {
        start = Math.min(start + step, num);
        const display = Number.isInteger(num) ? Math.floor(start) : start.toFixed(1);
        el.textContent = display + suffix;
        if(start >= num) clearInterval(timer);
      }, 25);
    });
  }

  // Run counter animation when metrics section enters viewport
  const metricsObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        animateCounters();
        metricsObs.unobserve(e.target);
      }
    });
  }, {threshold: 0.3});

  const metricsEl = document.getElementById('metrics');
  if(metricsEl) metricsObs.observe(metricsEl);

  // FORM SUBMIT HANDLER
  function formEnviado() {
    const btn = document.getElementById('formBtn');
    const success = document.getElementById('formSuccess');
    if(btn) btn.textContent = 'Enviando…';
    setTimeout(() => {
      if(btn) btn.textContent = 'Enviar mensaje →';
      if(success) success.style.display = 'block';
      document.getElementById('contactForm')?.reset();
    }, 1500);
  }