import React from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import DOMPurify from 'dompurify';
import { FormattedMessage } from 'react-intl';

const contactSchema = z.object({
  name: z.string().min(2, 'contact.nameMin'),
  email: z.string().email('contact.emailInvalid'),
  message: z.string().min(10, 'contact.messageMin'),
});
type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // 清理輸入避免 XSS
    const sanitized = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message),
    };
    // 模擬送出
    await new Promise((r) => setTimeout(r, 800));
    alert('訊息已送出！');
    reset();
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1 className="section-title">
            <FormattedMessage id="contact.title" defaultMessage="聯絡我" />
          </h1>
          <p className="section-subtitle">
            <FormattedMessage id="contact.subtitle" defaultMessage="歡迎透過下列表單與我聯繫！" />
          </p>
        </div>
      </section>
      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>
              <FormattedMessage id="contact.infoTitle" defaultMessage="聯絡資訊" />
            </h2>
            <p>
              <FormattedMessage id="contact.infoDesc" defaultMessage="您可以填寫表單或直接來信/社群聯絡我。" />
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <span className="contact-icon" aria-label="Email">📧</span>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p><a href="mailto:chang.jung.lu@example.com">chang.jung.lu@example.com</a></p>
                </div>
              </div>
              <div className="contact-method">
                <span className="contact-icon" aria-label="LinkedIn">💼</span>
                <div className="contact-details">
                  <h3>LinkedIn</h3>
                  <p><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate aria-label="聯絡表單">
            <h2>
              <FormattedMessage id="contact.formTitle" defaultMessage="聯絡表單" />
            </h2>
            <div className="form-group">
              <label htmlFor="name">
                <FormattedMessage id="contact.name" defaultMessage="姓名" />
                <span aria-label="必填">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
                autoComplete="name"
              />
              {errors.name && (
                <span id="name-error" role="alert" className="error-message">
                  <FormattedMessage id={errors.name.message || 'contact.nameMin'} defaultMessage="姓名至少2個字元" />
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">
                <FormattedMessage id="contact.email" defaultMessage="電子郵件" />
                <span aria-label="必填">*</span>
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
                autoComplete="email"
              />
              {errors.email && (
                <span id="email-error" role="alert" className="error-message">
                  <FormattedMessage id={errors.email.message || 'contact.emailInvalid'} defaultMessage="請輸入有效的電子郵件" />
                </span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="message">
                <FormattedMessage id="contact.message" defaultMessage="訊息內容" />
                <span aria-label="必填">*</span>
              </label>
              <textarea
                id="message"
                {...register('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
                minLength={10}
              />
              {errors.message && (
                <span id="message-error" role="alert" className="error-message">
                  <FormattedMessage id={errors.message.message || 'contact.messageMin'} defaultMessage="訊息至少10個字元" />
                </span>
              )}
            </div>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? <FormattedMessage id="contact.sending" defaultMessage="送出中..." /> : <FormattedMessage id="contact.send" defaultMessage="送出" />}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact; 