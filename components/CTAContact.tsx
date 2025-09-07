'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, Building, User, Calendar, Send, CheckCircle, AlertCircle } from 'lucide-react';

const formSchema = z.object({
  companyName: z.string().min(1, '会社名は必須です'),
  contactName: z.string().min(1, 'ご担当者名は必須です'),
  phone: z.string().min(1, '電話番号は必須です'),
  email: z.string().email('正しいメールアドレスを入力してください'),
  storeCount: z.string().min(1, '店舗数は必須です'),
  reservationServices: z.array(z.string()).min(1, 'ご利用中の予約サービスを選択してください'),
  implementationTiming: z.string().min(1, '導入希望時期を選択してください'),
  message: z.string().optional(),
  agreeTerms: z.boolean().refine(val => val === true, {
    message: 'プライバシーポリシー・利用規約に同意してください'
  })
});

type FormData = z.infer<typeof formSchema>;

const CTAContact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const reservationServiceOptions = [
    'HOT PEPPER',
    'ぐるなび', 
    '食べログ',
    'Googleカレンダー',
    '御社ホームページ（独自予約システム）',
    '一休',
    'インスタグラム',
    'スタペイ',
    'Retty',
    'トレタ',
    'LINE',
    'その他'
  ];

  const implementationTimingOptions = [
    '1ヶ月以内',
    '2-3ヶ月以内',
    '4-6ヶ月以内',
    '半年以上先',
    '未定'
  ];

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            StandardRacing株式会社 BookingGateway事業部
          </p>
          <p className="text-base text-gray-500">
            各担当営業までご連絡ください
          </p>
          <div className="w-24 h-1 bg-sky-600 mx-auto mt-6"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-2 text-green-800">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">お問い合わせを受け付けました。担当者からご連絡いたします。</span>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center space-x-2 text-red-800">
                <AlertCircle className="w-5 h-5" />
                <span className="font-medium">送信エラーが発生しました。しばらく時間をおいて再度お試しください。</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-1" />
                  会社名 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('companyName')}
                  type="text"
                  id="companyName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="株式会社〇〇"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
                )}
              </div>

              {/* Contact Name */}
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  ご担当者名 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('contactName')}
                  type="text"
                  id="contactName"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="山田 太郎"
                />
                {errors.contactName && (
                  <p className="mt-1 text-sm text-red-600">{errors.contactName.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  電話 <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="03-1234-5678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  メール <span className="text-red-500">*</span>
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                  placeholder="example@company.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Store Count */}
            <div>
              <label htmlFor="storeCount" className="block text-sm font-medium text-gray-700 mb-2">
                店舗数 <span className="text-red-500">*</span>
              </label>
              <input
                {...register('storeCount')}
                type="text"
                id="storeCount"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="例: 3店舗"
              />
              {errors.storeCount && (
                <p className="mt-1 text-sm text-red-600">{errors.storeCount.message}</p>
              )}
            </div>

            {/* Reservation Services */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                ご利用中の予約サービス（複数選択可） <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {reservationServiceOptions.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      {...register('reservationServices')}
                      type="checkbox"
                      id={`service-${index}`}
                      value={service}
                      className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500"
                    />
                    <label htmlFor={`service-${index}`} className="ml-2 text-sm text-gray-700">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
              {errors.reservationServices && (
                <p className="mt-1 text-sm text-red-600">{errors.reservationServices.message}</p>
              )}
            </div>

            {/* Implementation Timing */}
            <div>
              <label htmlFor="implementationTiming" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                導入希望時期 <span className="text-red-500">*</span>
              </label>
              <select
                {...register('implementationTiming')}
                id="implementationTiming"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              >
                <option value="">選択してください</option>
                {implementationTimingOptions.map((timing, index) => (
                  <option key={index} value={timing}>
                    {timing}
                  </option>
                ))}
              </select>
              {errors.implementationTiming && (
                <p className="mt-1 text-sm text-red-600">{errors.implementationTiming.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                自由記述（ご質問など）
              </label>
              <textarea
                {...register('message')}
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                placeholder="ご質問やご要望がございましたらお書きください"
              />
            </div>

            {/* Terms Agreement */}
            <div className="flex items-start space-x-3">
              <input
                {...register('agreeTerms')}
                type="checkbox"
                id="agreeTerms"
                className="w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 mt-1"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700">
                <a
                  href="https://bookinggateway.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-800 underline"
                >
                  プライバシーポリシー・利用規約
                </a>
                に同意する <span className="text-red-500">*</span>
              </label>
            </div>
            {errors.agreeTerms && (
              <p className="text-sm text-red-600">{errors.agreeTerms.message}</p>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-sky-600 text-white rounded-lg font-semibold hover:bg-sky-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                data-analytics="contact-form-submit"
                aria-label="お問い合わせを送信"
              >
                {isSubmitting ? (
                  <>送信中...</>
                ) : (
                  <>
                    送信する
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTAContact;