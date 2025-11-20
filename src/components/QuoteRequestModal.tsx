import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUser, faEnvelope, faPhone, faBuilding, faFileText, faCalendar, faCheckCircle, faUpload } from '@fortawesome/free-solid-svg-icons';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteRequestModal({ isOpen, onClose }: QuoteRequestModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Informations client
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    
    // Type de projet
    projectType: '',
    businessUnit: [],
    budget: '',
    timeline: '',
    
    // Détails projet
    description: '',
    location: '',
    surface: '',
    specificRequirements: '',
    
    // Préférences contact
    preferredContact: 'email',
    preferredTime: 'morning',
    hasPlans: false,
    planFiles: [] as File[]
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [fileError, setFileError] = useState('');

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

  // Validation des fichiers (PDF, JPG, PNG uniquement)
  const validateFiles = (files: FileList | null): File[] | null => {
    if (!files || files.length === 0) {
      setFileError('');
      return null;
    }

    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png'];
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];

    Array.from(files).forEach((file) => {
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const isValidType = allowedTypes.includes(file.type);
      const isValidExtension = allowedExtensions.includes(fileExtension);

      if (isValidType || isValidExtension) {
        validFiles.push(file);
      } else {
        invalidFiles.push(file.name);
      }
    });

    if (invalidFiles.length > 0) {
      setFileError(`Formats non acceptés : ${invalidFiles.join(', ')}. Seuls les formats PDF, JPG et PNG sont autorisés.`);
      return null;
    }

    setFileError('');
    return validFiles;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validFiles = validateFiles(e.target.files);
    if (validFiles) {
      handleInputChange('planFiles', validFiles);
    }
  };

  const businessUnits = [
    { id: 'fima-couchage', name: 'FIMA Couchage', icon: '🛏️', description: 'Literie & mobilier de chambre' },
    { id: 'fima-design', name: 'FIMA Design', icon: '🔨', description: 'Menuiserie & ameublement' },
    { id: 'univers-glass', name: 'UNIVERS GLASS', icon: '🏗️', description: 'Vitrerie & aluminium' }
  ];

  const projectTypes = [
    { id: 'residential', name: 'Projet résidentiel', description: 'Maison, appartement, villa' },
    { id: 'commercial', name: 'Projet commercial', description: 'Bureau, magasin, restaurant' },
    { id: 'hospitality', name: 'Hôtellerie', description: 'Hôtel, résidence, guesthouse' },
    { id: 'institutional', name: 'Institutionnel', description: 'Administration, école, clinique' },
    { id: 'industrial', name: 'Industriel', description: 'Usine, entrepôt, atelier' }
  ];

  const budgetRanges = [
    { id: 'under-5m', name: 'Moins de 5M FCFA' },
    { id: '5m-15m', name: '5M - 15M FCFA' },
    { id: '15m-50m', name: '15M - 50M FCFA' },
    { id: '50m-100m', name: '50M - 100M FCFA' },
    { id: 'over-100m', name: 'Plus de 100M FCFA' },
    { id: 'to-discuss', name: 'À discuter' }
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'Urgent (< 1 mois)' },
    { id: '1-3months', name: '1 à 3 mois' },
    { id: '3-6months', name: '3 à 6 mois' },
    { id: '6-12months', name: '6 à 12 mois' },
    { id: 'flexible', name: 'Flexible' }
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBusinessUnitToggle = (unitId: string) => {
    setFormData(prev => ({
      ...prev,
      businessUnit: prev.businessUnit.includes(unitId)
        ? prev.businessUnit.filter(id => id !== unitId)
        : [...prev.businessUnit, unitId]
    }));
  };

  const handleSubmit = () => {
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    console.log('Données du formulaire:', formData);
    setStep(4); // Étape de confirmation
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      businessUnit: [],
      budget: '',
      timeline: '',
      description: '',
      location: '',
      surface: '',
      specificRequirements: '',
      preferredContact: 'email',
      preferredTime: 'morning',
      hasPlans: false,
      planFiles: [] as File[]
    });
    setEmailError('');
    setPhoneError('');
    setFileError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
              Demande de devis
            </h2>
            <p style={{ color: '#6E6E6E' }}>
              Étape {step} sur 3 • Réponse sous 24h garantie
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          </button>
        </div>

        {/* Progress bar */}
        {step < 4 && (
          <div className="px-6 py-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%`, backgroundColor: '#B5C233' }}
              ></div>
            </div>
          </div>
        )}

        <div className="p-6">
          {/* Étape 1: Informations personnelles */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  Vos informations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Prénom *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Votre nom"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Email *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          handleInputChange('email', e.target.value);
                          validateEmail(e.target.value);
                        }}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                    {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Téléphone *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          handleInputChange('phone', e.target.value);
                          validatePhone(e.target.value);
                        }}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="+225 XX XX XX XX"
                        required
                      />
                    </div>
                    {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Entreprise / Organisation
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faBuilding} className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Nom de votre entreprise (optionnel)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setStep(2)}
                  disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  className="fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 2: Type de projet */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  Votre projet
                </h3>
                
                {/* Type de projet */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3" style={{ color: '#000000' }}>
                    Type de projet *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {projectTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => handleInputChange('projectType', type.id)}
                        className="p-4 border-2 rounded-lg text-left transition-colors"
                        style={{
                          borderColor: formData.projectType === type.id ? '#B5C233' : '#d1d5db',
                          backgroundColor: formData.projectType === type.id ? 'rgba(181, 194, 51, 0.05)' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (formData.projectType !== type.id) e.currentTarget.style.borderColor = '#B5C233';
                        }}
                        onMouseLeave={(e) => {
                          if (formData.projectType !== type.id) e.currentTarget.style.borderColor = '#d1d5db';
                        }}
                      >
                        <div className="font-medium" style={{ color: '#000000' }}>
                          {type.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {type.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Métiers concernés */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-3" style={{ color: '#000000' }}>
                    Métiers concernés * (plusieurs choix possibles)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {businessUnits.map((unit) => (
                      <button
                        key={unit.id}
                        onClick={() => handleBusinessUnitToggle(unit.id)}
                        className="p-4 border-2 rounded-lg text-left transition-colors"
                        style={{
                          borderColor: formData.businessUnit.includes(unit.id) ? '#B5C233' : '#d1d5db',
                          backgroundColor: formData.businessUnit.includes(unit.id) ? 'rgba(181, 194, 51, 0.05)' : 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          if (!formData.businessUnit.includes(unit.id)) e.currentTarget.style.borderColor = '#B5C233';
                        }}
                        onMouseLeave={(e) => {
                          if (!formData.businessUnit.includes(unit.id)) e.currentTarget.style.borderColor = '#d1d5db';
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">{unit.icon}</span>
                          <div className="font-medium" style={{ color: '#000000' }}>
                            {unit.name}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600">
                          {unit.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget et délais */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: '#000000' }}>
                      Budget envisagé
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => handleInputChange('budget', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Sélectionner une fourchette</option>
                      {budgetRanges.map((range) => (
                        <option key={range.id} value={range.id}>
                          {range.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3" style={{ color: '#000000' }}>
                      Délai souhaité
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => handleInputChange('timeline', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Sélectionner un délai</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline.id} value={timeline.id}>
                          {timeline.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => setStep(1)}
                  className="fima-btn-secondary px-8 py-3"
                  style={{ backgroundColor: '#6E6E6E', color: '#B5C233' }}
                >
                  Précédent
                </button>
                <button 
                  onClick={() => setStep(3)}
                  disabled={!formData.projectType || formData.businessUnit.length === 0}
                  className="fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Détails du projet */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#000000' }}>
                  Détails de votre projet
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Description du projet *
                    </label>
                    <div className="relative">
                      <FontAwesomeIcon icon={faFileText} className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]"
                        placeholder="Décrivez votre projet en détail : objectifs, contraintes, préférences..."
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                        Localisation
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Ville, quartier..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                        Surface approximative
                      </label>
                      <input
                        type="text"
                        value={formData.surface}
                        onChange={(e) => handleInputChange('surface', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Ex: 150 m², 50 chambres..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                      Exigences particulières
                    </label>
                    <textarea
                      value={formData.specificRequirements}
                      onChange={(e) => handleInputChange('specificRequirements', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Normes spécifiques, contraintes techniques, préférences de style..."
                      rows={3}
                    />
                  </div>

                  {/* Préférences de contact */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium mb-3" style={{ color: '#000000' }}>
                      Préférences de contact
                    </h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                          Mode de contact préféré
                        </label>
                        <select
                          value={formData.preferredContact}
                          onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Téléphone</option>
                          <option value="whatsapp">WhatsApp</option>
                          <option value="visit">Visite sur site</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                          Meilleur moment pour vous contacter
                        </label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="morning">Matin (8h-12h)</option>
                          <option value="afternoon">Après-midi (12h-17h)</option>
                          <option value="evening">Soirée (17h-20h)</option>
                          <option value="anytime">N'importe quand</option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={formData.hasPlans}
                          onChange={(e) => handleInputChange('hasPlans', e.target.checked)}
                          className="rounded border-gray-300 focus:ring-green-500"
                        />
                        <span className="text-sm" style={{ color: '#000000' }}>
                          J'ai des plans ou documents techniques à partager
                        </span>
                      </label>
                    </div>

                    {formData.hasPlans && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium mb-2" style={{ color: '#000000' }}>
                          Télécharger les plans ou documents techniques (PDF, JPG, PNG uniquement)
                        </label>
                        <div className="space-y-2">
                          <div className="flex items-center gap-4">
                            <input
                              type="file"
                              multiple
                              accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
                              onChange={handleFileChange}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                            />
                            <button
                              type="button"
                              className="fima-btn-secondary px-4 py-2 flex-shrink-0"
                              style={{ backgroundColor: '#6E6E6E', color: '#B5C233' }}
                            >
                              <FontAwesomeIcon icon={faUpload} className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-xs text-gray-500">
                            Formats acceptés : PDF, JPG, PNG • Taille max : 10 Mo par fichier
                          </p>
                          {fileError && <p className="text-red-500 text-sm">{fileError}</p>}
                          {formData.planFiles.length > 0 && (
                            <div className="mt-2">
                              <p className="text-sm font-medium mb-1" style={{ color: '#000000' }}>
                                Fichiers sélectionnés ({formData.planFiles.length}) :
                              </p>
                              <ul className="text-xs space-y-1">
                                {formData.planFiles.map((file, index) => (
                                  <li key={index} className="flex items-center gap-2 text-gray-600">
                                    <FontAwesomeIcon icon={faFileText} className="w-3 h-3" />
                                    {file.name} ({(file.size / 1024).toFixed(1)} Ko)
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <button 
                  onClick={() => setStep(2)}
                  className="fima-btn-secondary px-8 py-3"
                  style={{ backgroundColor: '#6E6E6E', color: '#B5C233' }}
                >
                  Précédent
                </button>
                <button 
                  onClick={handleSubmit}
                  disabled={!formData.description}
                  className="fima-btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Envoyer la demande
                </button>
              </div>
            </div>
          )}

          {/* Étape 4: Confirmation */}
          {step === 4 && (
            <div className="text-center space-y-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto" style={{ backgroundColor: 'rgba(181, 194, 51, 0.1)' }}>
                <FontAwesomeIcon icon={faCheckCircle} className="w-12 h-12" style={{ color: '#B5C233' }} />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat', color: '#000000' }}>
                  Demande envoyée avec succès !
                </h3>
                <p className="text-lg mb-4" style={{ color: '#6E6E6E' }}>
                  Merci {formData.firstName} pour votre confiance. Votre demande a été transmise à nos experts.
                </p>
              </div>

              <div className="rounded-lg p-6" style={{ backgroundColor: 'rgba(181, 194, 51, 0.05)' }}>
                <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
                  Prochaines étapes :
                </h4>
                <div className="space-y-2 text-sm" style={{ color: '#6E6E6E' }}>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-4 h-4" style={{ color: '#B5C233' }} />
                    <span>Réception de votre demande confirmée</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" style={{ color: '#B5C233' }} />
                    <span>Étude technique sous 24h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faUser} className="w-4 h-4" style={{ color: '#B5C233' }} />
                    <span>Contact par nos experts sous 48h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faFileText} className="w-4 h-4" style={{ color: '#B5C233' }} />
                    <span>Devis détaillé sous 5 jours ouvrés</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-sm" style={{ color: '#6E6E6E' }}>
                  Un email de confirmation a été envoyé à <strong>{formData.email}</strong>
                </p>
                <button 
                  onClick={handleClose}
                  className="fima-btn-primary px-8 py-3"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}