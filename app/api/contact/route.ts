import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    // TODO: メール送信処理を実装
    // ここで実際のメール送信サービス（SendGrid、Resend、AWS SESなど）を使用
    console.log('Contact form submission:', validatedData);
    
    // TODO: データベースへの保存（Supabaseなど）
    // await saveContactForm(validatedData);
    
    // TODO: 自動返信メールの送信
    // await sendAutoReplyEmail(validatedData.email, validatedData.contactName);
    
    // TODO: 社内通知メールの送信
    // await sendInternalNotification(validatedData);
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'お問い合わせを受け付けました。担当者からご連絡いたします。' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'フォームの入力内容に誤りがあります',
          errors: error.issues 
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。' 
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
