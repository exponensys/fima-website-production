import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faCalendar, faMessage, faPhone, faCheckCircle, faClock, faUsers, faAward } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner@2.0.3';

interface ExpertConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  consultationType?: 'expert' | 'appointment';
}

export function ExpertConsultationModal({ isOpen, onClose, consultationType = 'expert' }: ExpertConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    
    // Type de consultation
    serviceType: '',
    consultationType: consultationType,
    
    // Besoins spécifiques
    projectDescription: '',
    budget: '',
    timeline: '',
    
    // Préférences de rendez-vous (pour appointment)
    preferredDate: '',
    preferredTime: '',
    consultationMode: 'presential', // presential, video, phone
    
    // Consentements
    newsletter: false,
    dataProcessing: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  // Validation d'email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Format email invalide (ex: example@email.com)');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Validation de téléphone (indicatif + numéro)
  const validatePhone = (phone: string): boolean => {
    // Format attendu: +XXX XXXXXXXXX ou +XXX-XXXXXXXXX ou similaire
    const phoneRegex = /^\+\d{1,4}[\s-]?\d{6,}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Format invalide (ex: +225 01 23 45 67 89)');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const services = [
    { id: 'literie', name: 'Literie & Couchage', icon: '🛏️', description: 'Matelas, sommiers, oreillers' },
    { id: 'menuiserie', name: 'Menuiserie & Design', icon: '🪚', description: 'Mobilier sur-mesure, cuisines' },
    { id: 'vitrerie', name: 'Vitrerie & Aluminium', icon: '🏢', description: 'Façades, baies vitrées' },
    { id: 'b2b', name: 'Solutions B2B', icon: '🏗️', description: 'Projets professionnels' },
    { id: 'autre', name: 'Autre projet', icon: '💡', description: 'Besoin spécifique' }
  ];

  const budgetRanges = [
    { id: 'small', label: 'Moins de 500 000 F CFA', value: '<500k' },
    { id: 'medium', label: '500k - 2M F CFA', value: '500k-2M' },
    { id: 'large', label: '2M - 10M F CFA', value: '2M-10M' },
    { id: 'enterprise', label: 'Plus de 10M F CFA', value: '10M+' },
    { id: 'discuss', label: 'À discuter', value: 'discuss' }
  ];

  const timelineOptions = [
    { id: 'urgent', label: 'Urgent (< 1 mois)', value: 'urgent' },
    { id: 'short', label: '1-3 mois', value: '1-3months' },
    { id: 'medium', label: '3-6 mois', value: '3-6months' },
    { id: 'long', label: '6+ mois', value: '6months+' },
    { id: 'flexible', label: 'Flexible', value: 'flexible' }
  ];

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', 
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30'
  ];

  if (!isOpen) return null;

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      // Simulation d'envoi
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(
        consultationType === 'appointment' 
          ? 'Rendez-vous planifié avec succès ! Vous recevrez une confirmation par email.'
          : 'Demande envoyée ! Un expert vous contactera dans les 24h.'
      );
      
      onClose();
      setStep(1);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', company: '',
        serviceType: '', consultationType: consultationType,
        projectDescription: '', budget: '', timeline: '',
        preferredDate: '', preferredTime: '', consultationMode: 'presential',
        newsletter: false, dataProcessing: false
      });
      setEmailError('');
      setPhoneError('');
      
    } catch (error) {
      toast.error('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceedToStep2 = formData.firstName && formData.lastName && formData.email && formData.phone && formData.serviceType;
  const canProceedToStep3 = formData.projectDescription && formData.budget && formData.timeline;
  const canSubmit = consultationType === 'expert' ? 
    (canProceedToStep3 && formData.dataProcessing) :
    (canProceedToStep3 && formData.preferredDate && formData.preferredTime && formData.dataProcessing);

  const getStepTitle = () => {
    switch (step) {
      case 1: return 'Vos informations';
      case 2: return 'Votre projet';
      case 3: return consultationType === 'appointment' ? 'Planification' : 'Finalisation';
      default: return '';
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Prénom *</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="Votre prénom"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Nom *</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="Votre nom"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => {
            handleInputChange('email', e.target.value);
            validateEmail(e.target.value);
          }}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          placeholder="votre.email@exemple.com"
          required
        />
        {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Téléphone *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => {
              handleInputChange('phone', e.target.value);
              validatePhone(e.target.value);
            }}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="+225 XX XX XX XX"
            required
          />
          {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Entreprise</label>
          <input
            type="text"
            value={formData.company}
            onChange={(e) => handleInputChange('company', e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
            placeholder="Nom de votre entreprise"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4">Domaine d'intérêt *</label>
        <div className="grid grid-cols-1 gap-3">
          {services.map((service) => (
            <label key={service.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="radio"
                name="serviceType"
                value={service.id}
                checked={formData.serviceType === service.id}
                onChange={(e) => handleInputChange('serviceType', e.target.value)}
                className="sr-only"
              />
              <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                formData.serviceType === service.id 
                  ? 'border-green-500 bg-green-500' 
                  : 'border-gray-300'
              }`}>
                {formData.serviceType === service.id && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className="text-2xl mr-3">{service.icon}</span>
              <div>
                <div className="font-medium">{service.name}</div>
                <div className="text-sm text-gray-600">{service.description}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium mb-2">Description de votre projet *</label>
        <textarea
          value={formData.projectDescription}
          onChange={(e) => handleInputChange('projectDescription', e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
          rows={4}
          placeholder="Décrivez votre projet, vos besoins, vos objectifs..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-4">Budget approximatif *</label>
        <div className="space-y-2">
          {budgetRanges.map((range) => (
            <label key={range.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="radio"
                name="budget"
                value={range.value}
                checked={formData.budget === range.value}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                formData.budget === range.value 
                  ? 'border-green-500 bg-green-500' 
                  : 'border-gray-300'
              }`}>
                {formData.budget === range.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                )}
              </div>
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-4">Délai souhaité *</label>
        <div className="space-y-2">
          {timelineOptions.map((option) => (
            <label key={option.id} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <input
                type="radio"
                name="timeline"
                value={option.value}
                checked={formData.timeline === option.value}
                onChange={(e) => handleInputChange('timeline', e.target.value)}
                className="sr-only"
              />
              <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                formData.timeline === option.value 
                  ? 'border-green-500 bg-green-500' 
                  : 'border-gray-300'
              }`}>
                {formData.timeline === option.value && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                )}
              </div>
              {option.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      {consultationType === 'appointment' && (
        <>
          <div>
            <label className="block text-sm font-medium mb-4">Mode de consultation *</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleInputChange('consultationMode', 'presential')}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.consultationMode === 'presential'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <FontAwesomeIcon icon={faUsers} className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Présentiel</div>
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('consultationMode', 'video')}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.consultationMode === 'video'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <FontAwesomeIcon icon={faMessage} className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Visio</div>
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('consultationMode', 'phone')}
                className={`p-4 rounded-lg border-2 text-center transition-all ${
                  formData.consultationMode === 'phone'
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">Téléphone</div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Date souhaitée *</label>
              <input
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Heure souhaitée *</label>
              <select
                value={formData.preferredTime}
                onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all"
                required
              >
                <option value="">Choisir un créneau</option>
                {timeSlots.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
          </div>
        </>
      )}

      <div className="space-y-4">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
            className="mt-1"
          />
          <span className="text-sm">
            Je souhaite recevoir la newsletter FIMA avec les dernières actualités et offres spéciales.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={formData.dataProcessing}
            onChange={(e) => handleInputChange('dataProcessing', e.target.checked)}
            className="mt-1"
            required
          />
          <span className="text-sm">
            J'accepte le traitement de mes données personnelles pour cette demande. *
          </span>
        </label>
      </div>

      {consultationType === 'expert' && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-green-900 mb-1">Prochaines étapes</h4>
              <p className="text-sm text-green-800">
                Un de nos experts vous contactera dans les 24h pour discuter de votre projet et vous proposer des solutions adaptées.
              </p>
            </div>
          </div>
        </div>
      )}

      {consultationType === 'appointment' && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <FontAwesomeIcon icon={faCalendar} className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-blue-900 mb-1">Confirmation du rendez-vous</h4>
              <p className="text-sm text-blue-800">
                Vous recevrez un email de confirmation avec tous les détails du rendez-vous et les instructions selon le mode choisi.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-[rgba(43,42,42,0.72)] bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat' }}>
              {consultationType === 'appointment' ? 'Planifier un rendez-vous' : 'Parler à un expert'}
            </h2>
            <p className="text-gray-600 mt-1">
              {getStepTitle()} - Étape {step}/3
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm text-gray-500">{Math.round((step / 3) * 100)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${(step / 3) * 100}%`,
                backgroundColor: '#B5C233'
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {step === 1 && renderStep1()}
          {step === 2 && renderStep2()}
          {step === 3 && renderStep3()}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={() => step > 1 ? setStep(step - 1) : onClose()}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium transition-colors"
          >
            {step === 1 ? 'Annuler' : 'Précédent'}
          </button>
          
          <div className="flex gap-3">
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                disabled={step === 1 ? !canProceedToStep2 : !canProceedToStep3}
                className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all"
              >
                Suivant
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!canSubmit || isSubmitting}
                className="px-8 py-3 text-white rounded-lg font-medium disabled:bg-gray-400 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                style={{ backgroundColor: canSubmit && !isSubmitting ? '#B5C233' : undefined }}
                onMouseEnter={(e) => { if (canSubmit && !isSubmitting) e.currentTarget.style.backgroundColor = '#a3af2e' }}
                onMouseLeave={(e) => { if (canSubmit && !isSubmitting) e.currentTarget.style.backgroundColor = '#B5C233' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  consultationType === 'appointment' ? 'Planifier le rendez-vous' : 'Envoyer ma demande'
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}